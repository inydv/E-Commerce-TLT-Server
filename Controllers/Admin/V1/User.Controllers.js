// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../../../Utilities/index");
const {
  Update,
  GetById,
  GetAll,
} = require("../../../Services/HandlerFactory.Service");
const { SUCCESSFUL, ERROR } = require("../../../Constants/Messages.Constant");
const {
  SUCCESS,
  UNPROCESSABLE,
  BAD,
  INTERNAL_SERVER_ERROR,
} = require("../../../Constants/Status.Constant");
const { UserSchema } = require("../../../Schema/index");

// IMPORT REQUIRED PACKAGES
const { Cloudinary } = require("../../../Configs/Packages.Import");

// GET ALL USERS
exports.GetAllUsers = CatchAsyncError(async (req, res, next) => {
  // FIND ALL USERS
  const users = await GetAll(UserSchema);

  // IF USERS NOT FOUND
  if (!users) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "USERS"), BAD)
    );
  }

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "USERS"),
    DATA: users,
  });
});

// GET USER DETAIL
exports.GetUserDetail = CatchAsyncError(async (req, res, next) => {
  // FIND USER
  const user = await GetById(UserSchema, req.params.userId);

  // IF USER IS NOT FOUND
  if (!user) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "USER"), BAD)
    );
  }

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "USER"),
    DATA: user,
  });
});

// UPDATE USER ROLE
exports.UpdateUserRole = CatchAsyncError(async (req, res, next) => {
  // CHECK UPDATE OTHER THAN ROLE
  if (
    req.body.username ||
    req.body.email ||
    req.body.password ||
    req.body.phone ||
    req.body.avatar ||
    req.body.gender ||
    req.body.isVerified
  ) {
    return next(
      new ErrorHandler(
        ERROR.NOT_CHANGE.replace("${NAME}", "INFORMATION OTHER THAN ROLE"),
        UNPROCESSABLE
      )
    );
  }

  // UPDATE USER
  const user = await Update(UserSchema, req.params.userId, req.body);

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.UPDATE.replace("${NAME}", "USER ROLE"),
    DATA: user,
  });
});

// DELETE USER
exports.DeleteUser = CatchAsyncError(async (req, res, next) => {
  // FIND USER
  const user = await GetById(UserSchema, req.params.userId);

  // IF USER IS NOT FOUND
  if (!user) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "USER"), BAD)
    );
  }

  if (Object.keys(user.avatar).length === 0) {
    try {
      // REMOVE USER IMAGE FROM CLOUD
      await Cloudinary.v2.uploader.destroy(user.avatar.public_id);
    } catch (error) {
      // HANDLE ERROR
      return next(new ErrorHandler(error.message, INTERNAL_SERVER_ERROR));
    }
  }

  // REMOVE USER
  await user.deleteOne();

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.DELETE.replace("${NAME}", "USER"),
  });
});
