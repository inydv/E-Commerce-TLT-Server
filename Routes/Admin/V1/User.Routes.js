// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  GetAllUsers,
  GetUserDetail,
  UpdateUserRole,
  DeleteUser,
} = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllUsers);
Router.route("/:userId")
  .get(ValidateID, GetUserDetail)
  .patch(ValidateID, UpdateUserRole)
  .delete(ValidateID, DeleteUser);

// EXPORT
module.exports = Router;
