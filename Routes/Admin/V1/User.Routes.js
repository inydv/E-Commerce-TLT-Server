// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const { GetAllUsers, GetUserDetail, UpdateUserRole, DeleteUser, CountUsers } = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllUsers);
Router.route("/count-users").get(CountUsers);
Router.route("/:userId")
  .get(ValidateID, GetUserDetail)
  .patch(ValidateID, UpdateUserRole)
  .delete(ValidateID, DeleteUser);

// EXPORT
module.exports = Router;
