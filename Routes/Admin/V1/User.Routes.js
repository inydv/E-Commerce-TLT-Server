// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  GetAllUsers,
  GetUserDetail,
  UpdateUserRole,
  DeleteUser,
} = require("../../../Controllers/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllUsers);
Router.route("/:user-id")
  .get(GetUserDetail)
  .patch(UpdateUserRole)
  .delete(DeleteUser);

// EXPORT
module.exports = Router;
