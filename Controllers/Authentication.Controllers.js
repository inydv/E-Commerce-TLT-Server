// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../Utilities/index");
const { UserSchema, TokenSchema } = require("../Schema/index");
const { Create } = require("../Services/HandlerFactory.Service");
const { SendEmail } = require("../Utilities/index");
const {
  SUCCESSFUL,
  SUBJECT,
  TITLE,
} = require("../Constants/Messages.Constant");
const { SUCCESS } = require("../Constants/Status.Constant");
const { BASE_URL } = require("../Constants/Routes.Constant");

// REGISTER
exports.Register = CatchAsyncError(async (req, res, next) => {
  // CREATE
  const user = await Create(UserSchema, req.body);

  // CREATE TOKEN
  req.body = {
    userId: user._id,
    type: "Verification",
  };
  const token = await Create(TokenSchema, req.body);

  // VERIFICATION LINK
  const verificationLink =
    req.protocol +
    "://" +
    req.get("host") +
    BASE_URL.AUTHENTICATION +
    token.token;

  // SEND EMAIL
  await SendEmail({
    Title: TITLE.VERIFICATION_ACCOUNT,
    Email: user.email,
    Subject_1: SUBJECT.VERIFICATION_ACCOUNT_1,
    Subject_2: SUBJECT.VERIFICATION_ACCOUNT_2,
    Link: verificationLink,
  });

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.EMAIL_SENT.replace(
      "${EMAIL}",
      user.email.toUpperCase()
    ),
  });
});

// LOGIN
exports.Login = CatchAsyncError(async (req, res, next) => {});

// LOGOUT
exports.Logout = CatchAsyncError(async (req, res, next) => {});

// FORGOT PASSWORD
exports.ForgotPassword = CatchAsyncError(async (req, res, next) => {});

// RESET PASSWORD
exports.ResetPassword = CatchAsyncError(async (req, res, next) => {});

// VERIFY ACCOUNT
exports.VerifyAccount = CatchAsyncError(async (req, res, next) => {});
