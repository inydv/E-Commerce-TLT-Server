// IMPORT REQUIRED PACKAGES
const Express = require("express");

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

// ROUTES
Router.route("/").post(MultipleImages, CreateProduct);
Router.route("/:productId")
  .put(ValidateID, UpdateProduct)
  .delete(ValidateID, DeleteProduct);
Router.route("/review/:productId/:reviewId").delete(DeleteUserProductReview);

// EXPORT
module.exports = Router;
