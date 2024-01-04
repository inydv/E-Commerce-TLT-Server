// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../../../Utilities/index");
const { GetById, Update } = require("../../../Services/HandlerFactory.Service");
const ProductFeatures = require("../../../Services/ProductFeatures.Service");
const { SUCCESSFUL, ERROR } = require("../../../Constants/Messages.Constant");
const { SUCCESS, BAD } = require("../../../Constants/Status.Constant");
const { ProductSchema } = require("../../../Schema/index");

// GET ALL PRODUCT
exports.GetAllProduct = CatchAsyncError(async (req, res, next) => {
  // FILTER VARIABLE
  let filter = {};

  // ALL FIELDS THAT CAN COME WITH REQUEST QUERY PARAMS
  const searchFields = [
    "name",
    "category",
    "subCategories",
    "price",
    "ratings",
    "page",
    "sort",
  ];

  // FILTEROUT THE QUERY PARAMS ACCORDING TO SEARCHFIELDS
  searchFields.forEach((field) => {
    if (req.query[field]) {
      filter[field] = req.query[field];
    }
  });

  // COUNT TOTAL PRODUCTS
  const totalProductsCount = await ProductSchema.countDocuments();

  // CALLING SERVICE FOR FILTER
  const apiFeature = new ProductFeatures(ProductSchema.find(), filter).filter();

  // FIND METHOD
  let products = await apiFeature.query;

  // COUNT FILTERED PRODUCTS
  let filteredProductsCount = products.length;

  // CALLING SERVICE FOR PAGINATION AND SORTING
  apiFeature.pagination(8).sorting();

  // CLONE THE FIND METHOD
  products = await apiFeature.query.clone();

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "PRODUCTS"),
    DATA: {
      products: products,
      NUMBER_OF_TOTAL_PRODUCTS: totalProductsCount,
      NUMBER_OF_FILTERED_PRODUCTS: filteredProductsCount,
    },
  });
});

// GET PRODUCT DETAIL
exports.GetProductDetail = CatchAsyncError(async (req, res, next) => {
  // FIND PRODUCT
  const product = await GetById(ProductSchema, req.params.productId);

  // IF PRODUCT IS NOT FOUND
  if (!product) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "PRODUCT"), BAD)
    );
  }

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "PRODUCT"),
    DATA: product,
  });
});

// UPDATE PRODUCT REVIEW
exports.UpdateProductReview = CatchAsyncError(async (req, res, next) => {
  // CHECK UPDATE OTHER THAN STATUS
  if (req.body.name || req.body.description || req.body.images || req.body.category || req.body.subCategories || req.body.price || req.body.quantity || req.body.ratings) {
    return next(
      new ErrorHandler(ERROR.NOT_CHANGE.replace("${NAME}", "INFORMATION OTHER THAN REVIEWS"), UNPROCESSABLE)
    );
  }

  // DESTRUCTING REQUEST BODY
  const { rating, comment } = req.body;

  // CHANGE REQUEST BODY
  req.body = {
    user: req.user._id,
    rating: Number(rating),
    comment: comment,
  };

  // FIND PRODUCT
  const product = await GetById(ProductSchema, req.params.productId);

  // IF PRODUCT IS NOT FOUND
  if (!product) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "PRODUCT"), BAD)
    );
  }

  // IS ALREADY REVIEWED
  const isReviewed = product.reviews.find(
    (rev) => rev.user._id.toString() === req.user._id.toString()
  );

  // VARIABLES
  let numberOfReviews = 0,
    average = 0;

  // CHECK IF IS REVIEWED OR NOT
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user._id.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(req.body);
  }

  // NO OF REVIEWS
  numberOfReviews = product.reviews.length;

  // FIND AVERAGE
  product.reviews.forEach((rev) => {
    average += rev.rating;
  });

  // RATINGS AVERAGE
  product.ratings = average / numberOfReviews;

  // SAVE PRODUCT
  const updatedProduct = await product.save();

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.UPDATE.replace("${NAME}", "REVIEW"),
    DATA: updatedProduct,
  });
});

// DELETE PRODUCT REVIEW
exports.DeleteProductReview = CatchAsyncError(async (req, res, next) => {
  // FIND PRODUCT
  const product = await GetById(ProductSchema, req.params.productId);

  // IF PRODUCT IS NOT FOUND
  if (!product) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "PRODUCT"), BAD)
    );
  }

  // FILTER REVIEW
  const reviews = product.reviews.filter((rev) => {
    if (rev._id.toString() !== req.params.reviewId.toString()) {
      // IF USER DELETE ANY OTHER REVIEW THEN THROW ERROR
      if (rev.user._id.toString() !== req.user._id) {
        return next(
          new ErrorHandler(ERROR.NOT_DELETE.replace("${NAME}", "REVIEW"), BAD)
        );
      }
    }

    return rev._id.toString() !== req.params.reviewId.toString();
  });

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
