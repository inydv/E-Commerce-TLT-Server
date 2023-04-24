// ERROR HANDLER
class ErrorHandler extends Error {
  constructor(message, StatusCode) {
    super(message);
    this.StatusCode = StatusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

// export
module.exports = ErrorHandler;
