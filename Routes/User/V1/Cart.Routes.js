// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  CreateCart,
  UpdateCart,
  DeleteCart,
} = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").post(CreateCart);
Router.route("/:userId/:productId")
  .patch(ValidateID, UpdateCart)
  .delete(ValidateID, DeleteCart);

// EXPORT
module.exports = Router;
