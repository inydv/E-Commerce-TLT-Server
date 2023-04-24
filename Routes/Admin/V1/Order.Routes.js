// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  GetAllOrders,
  UpdateOrder,
  DeleteOrder,
} = require("../../../Controllers/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllOrders);
Router.route("/:order-id").post(UpdateOrder).delete(DeleteOrder);

// EXPORT
module.exports = Router;
