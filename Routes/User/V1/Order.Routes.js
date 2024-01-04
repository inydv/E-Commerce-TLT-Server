// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const { GetMyOrders, GetOrderDetail } = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetMyOrders);
Router.route("/:orderId").get(ValidateID, GetOrderDetail);

// EXPORT
module.exports = Router;
