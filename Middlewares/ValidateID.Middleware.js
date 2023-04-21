const { ErrorHandler, CatchAsyncError } = require("../Utilities/index");
const { MongoID } = require("../Validations/index");
const { ERROR } = require("../Constants/Messages.Constant");
const { UNPROCESSABLE } = require("../Constants/Status.Constant");

const ValidateID = (ID) =>
  CatchAsyncError(async (req, res, next) => {
    if (!MongoID(ID)) {
      return next(new ErrorHandler(ERROR.WRONG_MONGOID, UNPROCESSABLE));
    }

    next();
  });

module.exports = {
  ValidateID,
};
