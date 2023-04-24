// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  GetMyOrders,
  GetOrderDetail,
  CreateOrder,
} = require("../../../Controllers/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetMyOrders).post(CreateOrder);
Router.route("/:order-id").get(GetOrderDetail);

// EXPORT
module.exports = Router;
