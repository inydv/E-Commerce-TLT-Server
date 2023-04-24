// IMPORT REQUIRED PACKAGES
const { Express } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  GetAllContacts,
  GetContactDetail,
  UpdateContactDetail,
  DeleteContactDetail,
} = require("../../../Controllers/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllContacts);
Router.route("/:contact-id")
  .get(GetContactDetail)
  .patch(UpdateContactDetail)
  .delete(DeleteContactDetail);

// EXPORT
module.exports = Router;
