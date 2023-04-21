// ERROR HANDLER
class ErrorHandler extends Error {
  constructor(Message, StatusCode) {
    super(Message);
    this.StatusCode = StatusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

// export
module.exports = ErrorHandler;
