// IMPORT REQUIRED LOCAL FILES
const { ValidateID } = require("./ValidateID.Middleware");
const Errors = require("./Errors.Middleware");
const { IsAuthenticatedUser } = require("./Authentication.Middleware");
const { AuthorizeRole } = require("./AuthorizeRoles.Middleware");

// EXPORT
module.exports = {
  ValidateID,
  Errors,
  IsAuthenticatedUser,
  AuthorizeRole,
};
