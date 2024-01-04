// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler, SendEmail, SendToken } = require("../Utilities/index");
const { UserSchema, TokenSchema } = require("../Schema/index");
const { Create, Get, Update, GetById } = require("../Services/HandlerFactory.Service");
const { SUCCESSFUL, SUBJECT, TITLE, ERROR, VERIFICATION } = require("../Constants/Messages.Constant");
const { SUCCESS, UNAUTORIZE, INTERNAL_SERVER_ERROR, BAD } = require("../Constants/Status.Constant");
const { BASE_URL, ROUTES } = require("../Constants/Routes.Constant");

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
    ROUTES.AUTH +
    "/verify/account/" +
    token.token;

  try {
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
  } catch (error) {
    // HANDLE ERROR
    return next(new ErrorHandler(error.message, INTERNAL_SERVER_ERROR));
  }
});

// LOGIN
exports.Login = CatchAsyncError(async (req, res, next) => {
  // DESTRUCTURE REQUEST BODY
  const { email, password } = req.body;

  // IF EMAIL AND PASSWORD IS NULL
  if (!email || !password) {
    return next(
      new ErrorHandler(
        ERROR.INCORRECT.replace("${NAME}", "CREDENTAIL"),
        UNAUTORIZE
      )
    );
  }

  // FIND USER USING EMAIL AND SELECT PASSWORD
  const user = await Get(UserSchema, { email }, true);

  // IF USER IS NULL
  if (!user) {
    return next(
      new ErrorHandler(
        ERROR.INCORRECT.replace("${NAME}", "CREDENTAIL"),
        UNAUTORIZE
      )
    );
  }

  // IF USER IS NOT VERIFIED
  if (!user.isVerified) {
    return next(new ErrorHandler(ERROR.UNVERIFIED_ACCOUNT, UNAUTORIZE));
  }

  // COMPARE ENTERED PASSWORD AND DB PASSWORD
  const isPasswordMatched = user.ComparePassword(password);

  // IS PASSWORD MATCHED
  if (!isPasswordMatched) {
    return next(
      new ErrorHandler(
        ERROR.INCORRECT.replace("${NAME}", "CREDENTAIL"),
        UNAUTORIZE
      )
    );
  }

  // SEND TOKEN
  SendToken(user, res);
});

// LOGOUT
exports.Logout = CatchAsyncError(async (req, res, next) => {
  // SET COOKIE TOKEN NULL
  res.cookie("Token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  // SEND RESPONSE
  res.status(200).json({
    SUCCESS: true,
    message: SUCCESSFUL.LOGOUT,
  });
});

// FORGOT PASSWORD
exports.ForgotPassword = CatchAsyncError(async (req, res, next) => {
  // DESTRUCTURE REQUEST BODY
  const { email } = req.body;

  // IF EMAIL AND PASSWORD IS NULL
  if (!email) {
    return next(
      new ErrorHandler(ERROR.INCORRECT.replace("${NAME}", "EMAIL"), UNAUTORIZE)
    );
  }

  // FIND USER USING EMAIL
  const user = await Get(UserSchema, { email }, true);

  // IF USER IS NULL
  if (!user) {
    return next(new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "USER"), UNAUTORIZE));
  }

  // IF USER IS NOT VERIFIED
  if (!user.isVerified) {
    return next(new ErrorHandler(ERROR.UNVERIFIED_ACCOUNT, UNAUTORIZE));
  }

  // TOKEN REQUEST BODY
  req.body = {
    userId: user._id,
    type: "ResetPassword",
  };

  // CHECK IF USER ALREADY APPLIED FOR FORGOT OR NOT IN PAST 24 HOURS
  const userToken = await Get(TokenSchema, req.body);

  // TOKEN VARIABLE
  let token = null;

  if (userToken) {
    // UPDATE TOKEN
    token = await Update(TokenSchema, userToken._id, req.body);
  } else {
    // CREATE TOKEN
    token = await Create(TokenSchema, req.body);
  }

  // RESET LINK // TODO
  const ResetLink =
    req.protocol +
    "://" +
    req.get("host") +
    BASE_URL.AUTHENTICATION +
    ROUTES.AUTH +
    "/authentication" +
    token.token;

  try {
    // SEND EMAIL
    await SendEmail({
      Title: TITLE.RESET_PASSWORD,
      Email: user.email,
      Subject_1: SUBJECT.RESET_PASSWORD_1,
      Subject_2: SUBJECT.RESET_PASSWORD_2,
      Link: ResetLink,
    });

    // SEND RESPONSE
    res.status(SUCCESS).json({
      SUCCESS: true,
      MESSAGE: SUCCESSFUL.EMAIL_SENT.replace(
        "${EMAIL}",
        user.email.toUpperCase()
      ),
    });
  } catch (error) {
    // HANDLE ERROR
    return next(new ErrorHandler(error.message, INTERNAL_SERVER_ERROR));
  }
});

// RESET PASSWORD
exports.ResetPassword = CatchAsyncError(async (req, res, next) => {
  // DESTRUCTURING REQUEST PARAMS
  const { token } = req.params;

  // IF PASSWORD AND CONFIRM PASSWORD IS NOT SAME
  if (req.body?.password !== req.body?.confirmPassword) {
    return next(
      new ErrorHandler(
        ERROR.PASSWORD_NOT_MATCH,
        BAD
      )
    );
  }

  // GET TOKEN FROM DB
  const token_2 = await Get(TokenSchema, {
    token,
    type: "ResetPassword",
  });

  // IF TOKEN IS NULL
  if (!token_2) {
    return next(new ErrorHandler(ERROR.INVALID_TOKEN, UNAUTORIZE));
  }

  // GET USER
  const user = await GetById(UserSchema, token_2.userId);

  // IF USER NOT FOUND
  if (!user) {
    return next(new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "USER"), UNAUTORIZE));
  }

  // CHANGE USER PASSWORD
  user.password = req.body.password;

  // CHANGE IN DB ALSO
  await user.save();

  // REMOVE TOKEN
  await token_2.deleteOne();

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.CHANGE_PASSWORD,
  });
});

// VERIFY ACCOUNT
exports.VerifyAccount = CatchAsyncError(async (req, res, next) => {
  // DESTRUCTURING REQUEST PARAMS
  const { token } = req.params;

  // GET TOKEN FROM DB
  const token_2 = await Get(TokenSchema, {
    token,
    type: "Verification",
  });

  // IF TOKEN IS NULL
  if (!token_2) {
    res.render("verification.ejs", {
      h1: VERIFICATION.ERROR,
      type: "ERROR",
    });
    return next(new ErrorHandler(ERROR.INVALID_TOKEN, UNAUTORIZE));
  }

  // GET USER
  const user = await GetById(UserSchema, token_2.userId);

  // IF USER NOT FOUND
  if (!user) {
    // SEND RESPONSE
    res.render("verification.ejs", {
      h1: VERIFICATION.ERROR,
      type: "ERROR",
    });
  }

  // IF USER FOUND
  // CHANGE USER PASSWORD
  user.isVerified = true;
  user.createdAt = undefined;

  // CHANGE IN DB ALSO
  await user.save();

  // REMOVE TOKEN
  await token_2.deleteOne();

  // SEND RESPONSE
  res.render("verification.ejs", {
    h1: VERIFICATION.SUCCESS,
    type: "SUCCESS",
  });
});
