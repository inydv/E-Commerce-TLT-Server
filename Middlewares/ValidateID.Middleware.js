// IMPORT LOCAL REQUIRED FILES
const { ErrorHandler, CatchAsyncError } = require("../Utilities/index");
const { MongoID } = require("../Validations/index");
const { ERROR } = require("../Constants/Messages.Constant");
const { UNPROCESSABLE } = require("../Constants/Status.Constant");

// MONGOID VALIDATION MIDDLEWARE
const ValidateID = CatchAsyncError(async (req, res, next) => {
  if (!MongoID(req.params.id)) {
    return next(new ErrorHandler(ERROR.WRONG_MONGOID, UNPROCESSABLE));
  }

  next();
});

// EXPORTS
module.exports = {
  ValidateID,
};
