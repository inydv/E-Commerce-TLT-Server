// IMPORT REQUIRED PACKAGES
const Express = require("express");
const Multer = require('multer');

// IMPORT LOCAL REQUIRED FILES
const { GetMyInformation, UpdateUserInformation } = require("../../../Controllers/index");
const { SingleImage } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// CONFIGURE MULTER TO HANDLE MULTIPART/FORM-DATA
const Upload = Multer();

// ROUTES
Router.route("/me").get(GetMyInformation);
Router.route("/update").put(Upload.single('avatar'), SingleImage, UpdateUserInformation);

// EXPORT
module.exports = Router;
