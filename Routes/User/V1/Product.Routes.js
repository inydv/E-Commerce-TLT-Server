// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  GetAllProduct,
  GetProductDetail,
  CreateProductReview,
  GetProductReview,
  DeleteProductReview,
} = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllProduct);
Router.route("/reviews").post(CreateProductReview);
Router.route("/:productId").get(ValidateID, GetProductDetail);
Router.route("/review/:productId").get(ValidateID, GetProductReview);
Router.route("/review/:productId").delete(ValidateID, DeleteProductReview);

// EXPORT
module.exports = Router;
