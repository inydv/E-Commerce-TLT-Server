// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../../../Utilities/index");
const { SendToken } = require("../../../Utilities/index");
const { Update } = require("../../../Services/HandlerFactory.Service");
const { SUCCESSFUL, ERROR } = require("../../../Constants/Messages.Constant");
const { SUCCESS, UNPROCESSABLE, BAD } = require("../../../Constants/Status.Constant");
const { UserSchema } = require("../../../Schema/index");

// GET MY INFORMATION
exports.GetMyInformation = CatchAsyncError(async (req, res, next) => {
  SendToken(req.user, res);
});

// UPDATE USER INFORMATION
exports.UpdateUserInformation = CatchAsyncError(async (req, res, next) => {
  // USER CAN'T CHANGE THEIR EMAIL
  if (req.body.email || req.body.isVerified || req.body.role) {
    return next(
      new ErrorHandler(ERROR.NOT_CHANGE.replace("${NAME}", "EMAIL, VERIFICATION AND ROLE"), UNPROCESSABLE)
    );
  }

  // USER CAN'T CHANGE THEIR ROLE
  if (req.body.role) {
    return next(
      new ErrorHandler(ERROR.NOT_CHANGE.replace("${NAME}", "ROLE"), UNPROCESSABLE)
    );
  }

  // IF USER CHANGE PASSWORD
  if (req.body?.currentPassword) {
    // COMPARE ENTERED PASSWORD AND DB PASSWORD
    const isPasswordMatched = req.user.ComparePassword(req.body?.currentPassword);

    // IS PASSWORD MATCHED
    if (!isPasswordMatched) {
      return next(
        new ErrorHandler(ERROR.INCORRECT.replace("${NAME}", "PASSWORD"), BAD)
      );
    }

    // IF PASSWORD AND CONFIRM PASSWORD IS NOT SAME
    if (req.body?.password !== req.body?.confirmPassword) {
      return next(
        new ErrorHandler(ERROR.PASSWORD_NOT_MATCH, BAD)
      );
    }
  }

  // IF GENDER IS EMPTY THEN REMOVE GENDER
  if (!req.body?.gender) {
    delete req.body?.gender;
  }

  // UPDATE USER
  const user = await Update(UserSchema, req.user._id, req.body);

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.UPDATE.replace("${NAME}", "USER"),
    DATA: user,
  });
});
