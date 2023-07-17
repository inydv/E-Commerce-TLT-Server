// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const {
  SendStripeApiKey,
  ProcessPayment,
} = require("../../../Controllers/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/stripe/api-key").get(SendStripeApiKey);
Router.route("/process").post(ProcessPayment);

// EXPORT
module.exports = Router;
