// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  GetAllOrders,
  UpdateOrder,
  DeleteOrder,
} = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllOrders);
Router.route("/:orderId")
  .post(ValidateID, UpdateOrder)
  .delete(ValidateID, DeleteOrder);

// EXPORT
module.exports = Router;
