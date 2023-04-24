// IMPORT LOCAL REQUIRED FILES
const { ErrorHandler } = require("../Utilities/index");
const { ERROR } = require("../Constants/Messages.Constant");

// PRE-DEFINED AND CUSTOM ERROR
module.exports = (error, req, res, next) => {
  error.StatusCode = error.StatusCode || 500;
  error.Message = error.Message || ERROR.INTERNAL_SERVER;

  // VALIDATION ERROR
  if (error.name === "ValidationError") {
    const Message = Object.values(error.errors)
      .map((val) => val.message.toUpperCase())
      .join(", ");
    error = new ErrorHandler(Message, 400);
  }

  // WRONG MONGODB ID ERROR
  if (error.name === "CastError") {
    const Message = ERROR.CAST_ERROR.replace("${PATH}", error.path);
    error = new ErrorHandler(Message, 400).toUpperCase();
  }

  // MONGOOSE DUPLICATE KEY ERROR
  if (error.code === 11000) {
    const Message = ERROR.MONGODB_DUPLICATE_KEY.replace(
      "${KEY_VALUE}",
      Object.keys(error.keyValue)
    ).toUpperCase();
    error = new ErrorHandler(Message, 400);
  }

  // WRONG JWT ERROR
  if (error.name === "JsonWebTokenError") {
    const Message = ERROR.WRONG_JWT;
    error = new ErrorHandler(Message, 400);
  }

  // JWT EXPIRE ERROR
  if (error.name === "TokenExpireError") {
    const Message = ERROR.EXPIRE_JWT;
    error = new ErrorHandler(Message, 400);
  }

  // SEND RESPONSE
  res.status(error.StatusCode).json({
    Success: false,
    Message: error.message,
  });
};
