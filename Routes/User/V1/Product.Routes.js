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

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllProduct);
Router.route("/:id").get(GetProductDetail);
Router.route("/reviews").post(CreateProductReview);
Router.route("/review/:product-id").get(GetProductReview);
Router.route("/review/:id").delete(DeleteProductReview);

// EXPORT
module.exports = Router;
