// IMPORT LOCAL REQUIRED FILES
const { ErrorHandler, CatchAsyncError } = require("../Utilities/index");
const { ERROR } = require("../Constants/Messages.Constant");
const { UNAUTORIZE } = require("../Constants/Status.Constant");
const { GetById } = require("../Services/HandlerFactory.Service");
const { UserSchema } = require("../Schema/index");

// IMPORT REQUIRED PACKAGES
const { JWT } = require("../Configs/Packages.Import");

// ENV CONFIG
require("dotenv").config("../Configs/config.env");

// VALIDATE USER IS LOGGED IN OR NOT
const IsAuthenticatedUser = CatchAsyncError(async (req, res, next) => {
  // DESTRUCTURE TOKEN FROM COOKIES
  const { Token } = req.cookies;

  // CHECK IF TOKEN PRESENT OR NOT
  if (!Token) {
    return next(new ErrorHandler(ERROR.LOGIN, UNAUTORIZE));
  }

  // VERIFY THE TOKEN
  const Data = JWT.verify(Token, process.env.JWT_KEY);

  req.user = await GetById(UserSchema, Data.id, true);

  // IF USER NOT FIND
  if (!req.user) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "USER"), UNAUTORIZE)
    );
  }

  next();
});

// EXPORTS
module.exports = {
  IsAuthenticatedUser,
};
