// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  GetAllContacts,
  GetContactDetail,
  UpdateContactDetail,
  DeleteContactDetail,
} = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllContacts);
Router.route("/:contactId")
  .get(ValidateID, GetContactDetail)
  .patch(ValidateID, UpdateContactDetail)
  .delete(ValidateID, DeleteContactDetail);

// EXPORT
module.exports = Router;
