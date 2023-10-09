// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const {
  GetAllProduct,
  GetProductDetail,
  UpdateProductReview,
  DeleteProductReview,
} = require("../../../Controllers/index");
const { ValidateID, IsAuthenticatedUser } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllProduct);
Router.route("/:productId").get(ValidateID, GetProductDetail);
Router.route("/review/:productId").put(IsAuthenticatedUser, ValidateID, UpdateProductReview);
Router.route("/review/:productId/:reviewId").delete(IsAuthenticatedUser, ValidateID, DeleteProductReview);

// EXPORT
module.exports = Router;
