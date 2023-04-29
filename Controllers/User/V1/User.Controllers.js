// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../../../Utilities/index");
const { SendToken } = require("../../../Utilities/index");
const { Update } = require("../../../Services/HandlerFactory.Service");
const { SUCCESSFUL, ERROR } = require("../../../Constants/Messages.Constant");
const {
  SUCCESS,
  UNPROCESSABLE,
} = require("../../../Constants/Status.Constant");
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
      new ErrorHandler(
        ERROR.NOT_CHANGE.replace("${NAME}", "EMAIL, VERIFICATION AND ROLE"),
        UNPROCESSABLE
      )
    );
  }

  // USER CAN'T CHANGE THEIR ROLE
  if (req.body.role) {
    return next(
      new ErrorHandler(
        ERROR.NOT_CHANGE.replace("${NAME}", "ROLE"),
        UNPROCESSABLE
      )
    );
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
