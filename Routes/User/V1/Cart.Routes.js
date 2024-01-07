// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const { GetCart, UpdateCart } = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetCart);
Router.route("/:userId/:productId").put(ValidateID, UpdateCart);

// EXPORT
module.exports = Router;
