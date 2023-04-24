// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  CreateCart,
  UpdateCart,
  DeleteCart,
} = require("../../../Controllers/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").post(CreateCart);
Router.route("/:user-id/:product-id").patch(UpdateCart).delete(DeleteCart);

// EXPORT
module.exports = Router;
