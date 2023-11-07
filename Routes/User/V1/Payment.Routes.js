// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const { RazorpayCreateOrder, PaymentVerification, GetKeyID } = require("../../../Controllers/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/create/order").post(RazorpayCreateOrder);
Router.route("/vertification").post(PaymentVerification);
Router.route("/keyId").get(GetKeyID);

// EXPORT
module.exports = Router;
