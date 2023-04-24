// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../../../Controllers/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").post(CreateProduct);
Router.route("/:product-id").put(UpdateProduct).delete(DeleteProduct);

// EXPORT
module.exports = Router;
