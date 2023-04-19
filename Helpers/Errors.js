const ErrorHandler = require("../Utilities/ErrorHandler");

// PRE-DEFINED AND CUSTOM ERROR
module.exports = (error, req, res, next) => {
  error.StatusCode = error.StatusCode || 500;
  error.Message = error.Message || "Internal Server Error";

  // VALIDATION ERROR
  if (error.name === "ValidationError") {
    const Message = Object.values(error.errors)
      .map((val) => val.message)
      .join(", ");
    error = new ErrorHandler(Message, 400);
  }

  // WRONG MONGODB ID ERROR
  if (error.name === "CastError") {
    const Message = `Resource Not Found. Invalid: ${error.path}`;
    error = new ErrorHandler(Message, 400);
  }

  // MONGOOSE DUPLICATE KEY ERROR
  if (error.code === 11000) {
    const Message = `Duplicate ${Object.keys(error.keyValue)} Entered`;
    error = new ErrorHandler(Message, 400);
  }

  // WRONG JWT ERROR
  if (error.name === "JsonWebTokenError") {
    const Message = `Json Web Token Is Invalid, Try Again`;
    error = new ErrorHandler(Message, 400);
  }

  // JWT EXPIRE ERROR
  if (error.name === "TokenExpireError") {
    const Message = `Json Web Token is Expired, Try again`;
    error = new ErrorHandler(Message, 400);
  }

  res.status(error.StatusCode).json({
    Success: false,
    Message: error.Message,
  });
};
