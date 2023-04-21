// IMPORT LOCAL REQUIRED FILES
const { EmailValidation } = require("./Email.Validation");
const { NumberValidation } = require("./Number.Validation");
const { MongoID } = require("./MongoID.Validation");

// EXPORT
module.exports = { EmailValidation, NumberValidation, MongoID };
