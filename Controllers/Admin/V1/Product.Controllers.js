// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../../../Utilities/index");
const { ProductSchema } = require("../../../Schema/index");
const { Create, GetById, Update } = require("../../../Services/HandlerFactory.Service");
const { SUCCESSFUL } = require("../../../Constants/Messages.Constant");
const { SUCCESS } = require("../../../Constants/Status.Constant");

// CLOUDINARY DELETE FUNCTION
async function DeleteFromCloud(images, next) {
  // ITRATE IN IMAGES
  for (let i = 0; i < images.length; i++) {
    try {
      // REMOVE PRODUCT IMAGE FROM DATABASE
      await cloudinary.v2.uploader.destroy(images[i].public_id);
    } catch (error) {
      // HANDLE ERROR
      return next(new ErrorHandler(error.message, INTERNAL_SERVER_ERROR));
    }
  }
}

// CREATE PRODUCT
exports.CreateProduct = CatchAsyncError(async (req, res, next) => {
  // ADD USER IN REQUEST BODY
  req.body.user = req.user._id;

  // CREATE
  const product = await Create(ProductSchema, req.body);

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.CREATE.replace("${NAME}", "PRODUCT"),
    DATA: product,
  });
});

// UPDATE PRODUCT DETAIL
exports.UpdateProduct = CatchAsyncError(async (req, res, next) => {
  // FIND PRODUCT
  const product = await GetById(ProductSchema, req.params.productId);

  // IF PRODUCT IS NOT FOUND
  if (!product) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "PRODUCT"), BAD)
    );
  }

  // IF REQUEST CONTAIN IMAGES
  if (req.body.images) {
    try {
      // REMOVE PRODUCT IMAGE FROM CLOUD
      DeleteFromCloud(product.images, next);

      // ADD PRODUCT IMAGE IN CLOUD
      let images = [];

      // ITRATE IN REQUEST IMAGES
      for (let i = 0; i < req.body.images.length; i++) {
        // UPLOAD IMAGE
        const image = await cloudinary.v2.uploader.upload(req.body.images[i], {
          folder: "Products",
        });

        // PUSH IMAGE IN VARIABLE
        images.push({
          public_id: image.public_id,
          url: image.secure_url,
        });
      }
    } catch (error) {
      // HANDLE ERROR
      return next(new ErrorHandler(error.message, INTERNAL_SERVER_ERROR));
    }

    // PASS TO REQUEST BODY IMAGES
    req.body.images = image;
  }

  // FIND CONTACT AND UPDATE
  const product_2 = await Update(ProductSchema, req.params.productId, req.body);

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.UPDATE.replace("${NAME}", "PRODUCT"),
    DATA: product_2,
  });
});

// DELETE PRODUCT
exports.DeleteProduct = CatchAsyncError(async (req, res, next) => {
  // FIND PRODUCT
  const product = await GetById(ProductSchema, req.params.productId);

  // IF PRODUCT IS NOT FOUND
  if (!product) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "PRODUCT"), BAD)
    );
  }

  try {
    // REMOVE PRODUCT IMAGE FROM CLOUD
    DeleteFromCloud(product.images, next);
  } catch (error) {
    // HANDLE ERROR
    return next(new ErrorHandler(error.message, INTERNAL_SERVER_ERROR));
  }

  // REMOVE PRODUCT
  await product.deleteOne();

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.DELETE.replace("${NAME}", "PRODUCT"),
  });
});

// DELETE PRODUCT REVIEW
exports.DeleteUserProductReview = CatchAsyncError(async (req, res, next) => {
  // FIND PRODUCT
  const product = await GetById(ProductSchema, req.params.productId);

  // IF PRODUCT IS NOT FOUND
  if (!product) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "PRODUCT"), BAD)
    );
  }

  // FILTER REVIEW
  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.params.reviewId.toString()
  );

  // VARIABLES
  let ratings = 0,
    average = 0;

  // FIND AVERAGE
  reviews.forEach((rev) => {
    average += rev.rating;
  });

  // CHECK CONDITION
  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  // DELETE REVIEW
  await Update(ProductSchema, req.params.productId, { reviews, ratings });

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.DELETE.replace("${NAME}", "REVIEW"),
  });
});

// COUNT PRODUCTS
exports.CountProducts = CatchAsyncError(async (req, res, next) => {
  // FIND PRODUCTS COUNT
  const allProduct = await CountDocument(ProductSchema);
  const outOfStockProduct = await CountDocument(ProductSchema, { quantity: 0 });
  const inStockProduct = await CountDocument(ProductSchema, { role: { $ne: 0 } });

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "PRODUCT COUNT"),
    DATA: {
      ALL_PRODUCT: allProduct,
      OUT_OF_STOCK_PRODUCT: outOfStockProduct,
      IN_STOCK_PRODUCT: inStockProduct,
    },
  });
});