// IMPORT REQUIRED LOCAL FILES
const { ValidateID } = require("./ValidateID.Middleware");
const Errors = require("./Errors.Middleware");
const { IsAuthenticatedUser } = require("./Authentication.Middleware");
const { AuthorizeRole } = require("./AuthorizeRoles.Middleware");
const { SingleImage, MultipleImages } = require("./Cloudinary.middleware");

// EXPORT
module.exports = {
  ValidateID,
  Errors,
  IsAuthenticatedUser,
  AuthorizeRole,
  SingleImage,
  MultipleImages,
};
