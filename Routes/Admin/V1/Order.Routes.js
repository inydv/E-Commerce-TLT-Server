// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  GetAllOrders,
  UpdateOrderStatus,
  DeleteOrder,
} = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllOrders);
Router.route("/:orderId")
  .patch(ValidateID, UpdateOrderStatus)
  .delete(ValidateID, DeleteOrder);

// EXPORT
module.exports = Router;
