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



// class ApiError extends Error {
//   constructor(
//     statusCode,
//     message = "Something went wrong",
//     errors = [],
//     stack = ""
//   ) {
//     super(message);
//     this.statusCode = statusCode;
//     this.data = null;
//     this.message = message;
//     this.success = false;
//     this.errors = errors;

//     if (stack) {
//       this.stack = stack;
//     } else {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }

// export { ApiError };
