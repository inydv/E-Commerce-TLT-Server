// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const { GetAllContacts, GetContactDetail, UpdateContactStatus, DeleteContactDetail, CountContacts } = require("../../../Controllers/index");
const { ValidateID } = require("../../../Middlewares/index");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/").get(GetAllContacts);
Router.route("/count-contacts").get(CountContacts);
Router.route("/:contactId")
  .get(ValidateID, GetContactDetail)
  .patch(ValidateID, UpdateContactStatus)
  .delete(ValidateID, DeleteContactDetail);

// EXPORT
module.exports = Router;
