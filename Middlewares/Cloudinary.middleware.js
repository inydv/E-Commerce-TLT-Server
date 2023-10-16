// IMPORT REQUIRED PACKAGE
const Cloudinary = require("cloudinary");
const DatauriParser = require("datauri/parser");
const Path = require("path");

// CREATE PARSER
const Parser = new DatauriParser();

// HANDLE SINGLE IMAGE
const SingleImage = async (req, res, next) => {
  // CHECK USER CHANGE IMAGE OR NOT
  if (req.body.avatar) {
    // REMOVE OLD IMAGE
    if (req.user.avatar.public_id) {
      try {
        // REMOVE USER IMAGE FROM CLOUD
        await Cloudinary.v2.uploader.destroy(req.user.avatar.public_id);
      } catch (error) {
        // HANDLE ERROR
        return next(new ErrorHandler(error.message, INTERNAL_SERVER_ERROR));
      }
    }

    // UPLOAD NEW IMAGE
    const newImage = await Cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "Avatars",
      // width: 250,
      crop: "scale",
    });

    // SEND TO REQUEST BODY AVATAR
    req.body.avatar = {
      public_id: newImage.public_id,
      url: newImage.url,
    };
  }

  // NEXT
  next();
};

// HANDLE MULTIPLE IMAGES
const MultipleImages = async (req, res, next) => {
  // CHECK REQUEST BODY CONTAIN IMAGE OR NOT
  if (req?.files) {
    const images = [];

    // ITRATE IN REQUESTED BODY IMAGES
    for (let i = 0; i < req?.files.length; i++) {
      // PARSING THE IMAGE
      const extName = Path.extname(req?.files[i]?.originalname).toString();
      const file64 = Parser.format(extName, req?.files[i]?.buffer);

      // UPLOAD IMAGE
      const result = await Cloudinary.v2.uploader.upload(file64.content, {
        folder: "Products",
      });

      // PUSH INTO VARIABLE IMAGES
      images.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    // SEND TO REQUEST BODY IMAGES
    req.body.images = images;
  }

  // NEXT
  next();
};

// EXPORTS
module.exports = {
  SingleImage,
  MultipleImages,
};
