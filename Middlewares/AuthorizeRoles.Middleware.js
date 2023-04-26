// IMPORT LOCAL REQUIRED FILES
const { ErrorHandler } = require("../Utilities/index");
const { ERROR } = require("../Constants/Messages.Constant");
const { UNAUTORIZE } = require("../Constants/Status.Constant");

// VALIDATE USER ROLE
const AuthorizeRole = (...roles) => {
  // ...roles as array
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          ERROR.ROLE.replace("${ROLE}", req.user.role),
          UNAUTORIZE
        )
      );
    }

    next();
  };
};

// EXPORTS
module.exports = {
  AuthorizeRole,
};
