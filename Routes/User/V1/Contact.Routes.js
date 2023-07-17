// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const { CreateContact } = require("../../../Controllers/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").post(CreateContact);

// EXPORT
module.exports = Router;
