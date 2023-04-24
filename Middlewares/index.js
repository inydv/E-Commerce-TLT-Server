// IMPORT REQUIRED LOCAL FILES
const { ValidateID } = require("./ValidateID.Middleware");
const Errors = require("./Errors.Middleware");

// EXPORT
module.exports = {
  ValidateID,
  Errors,
};
