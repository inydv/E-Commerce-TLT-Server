// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const { UpdateUserInformation } = require("../../../Controllers/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/update").put(UpdateUserInformation);

// EXPORT
module.exports = Router;
