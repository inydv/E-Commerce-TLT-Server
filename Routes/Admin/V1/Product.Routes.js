// IMPORT REQUIRED PACKAGES
const Express = require("express");
const Multer = require('multer');

// IMPORT LOCAL REQUIRED FILES
const {
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
  DeleteUserProductReview,
} = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");
const { MultipleImages } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// CONFIGURE MULTER TO HANDLE MULTIPART/FORM-DATA
const Upload = Multer();

// ROUTES
Router.route("/").post(Upload.array('images', 5), MultipleImages, CreateProduct);
Router.route("/:productId")
  .put(Upload.array('images', 5), ValidateID, MultipleImages, UpdateProduct)
  .delete(ValidateID, DeleteProduct);
Router.route("/review/:productId/:reviewId").delete(DeleteUserProductReview);

// EXPORT
module.exports = Router;
