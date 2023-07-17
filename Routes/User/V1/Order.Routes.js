// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const {
  GetMyOrders,
  GetOrderDetail,
  CreateOrder,
} = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetMyOrders).post(CreateOrder);
Router.route("/:orderId").get(ValidateID, GetOrderDetail);

// EXPORT
module.exports = Router;
