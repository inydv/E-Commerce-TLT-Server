// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const { GetAllOrders, UpdateOrderStatus, DeleteOrder, CountOrders } = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllOrders);
Router.route("/count-orders").get(CountOrders);
Router.route("/:orderId")
  .patch(ValidateID, UpdateOrderStatus)
  .delete(ValidateID, DeleteOrder);

// EXPORT
module.exports = Router;
