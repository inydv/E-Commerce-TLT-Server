// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const {
  GetMyInformation,
  UpdateUserInformation,
} = require("../../../Controllers/index");
const { SingleImage } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/me").get(GetMyInformation);
Router.route("/update").put(SingleImage, UpdateUserInformation);

// EXPORT
module.exports = Router;
