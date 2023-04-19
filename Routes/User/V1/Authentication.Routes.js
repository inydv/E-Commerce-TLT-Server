// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  RegisterUser,
} = require("../../../Controllers/User/V1/Authentication.Controllers");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/register").post(RegisterUser);

// EXPORT
module.exports = Router;
