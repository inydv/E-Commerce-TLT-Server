// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").post(CreateProduct);
Router.route("/:productId")
  .put(ValidateID, UpdateProduct)
  .delete(ValidateID, DeleteProduct);

// EXPORT
module.exports = Router;
