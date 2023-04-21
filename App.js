// IMPORT REUIRED PACKAGES
const {
  Express,
  CookieParser,
  Cors,
  BodyParser,
} = require("./Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const { UserAuthenticationRoute } = require("./Routes/index");
const { Errors } = require("./Helpers/index");
const { ErrorHandler, SuccessHandler } = require("./Configs/Morgan");
const { CORS } = require("./Constants/Configuration.Constant");
const { ERROR } = require("./Constants/Messages.Constant");
const { NOT_FOUND } = require("./Constants/Status.Constant");
const { USER } = require("./Constants/Routes.Constant");

// DOTENV CONFIG
require("dotenv").config({ path: "./Configs/config.env" });

//EXPRESS
const App = Express();

// MORGAN
App.use(SuccessHandler);
App.use(ErrorHandler);

// APP USE JSON FORMAT
App.use(Express.json());

// PARSER CONFIGS
App.use(CookieParser());
App.use(BodyParser.urlencoded({ extended: true }));

// CORS
App.use(
  Cors({
    origin: CORS.ORIGIN,
    methods: CORS.METHODS,
    preflightContinue: true,
    credentials: true,
  })
);

// USE LOCAL REQUIRED FILES
App.use(USER.AUTHENTICATION, UserAuthenticationRoute);

// RETURN 404 NOT FOUND FOR ANY UNKNOWN API REQUESTS
App.use((req, res, next) => {
  next(new ErrorHandler(ERROR.API_NOT_FOUND, NOT_FOUND));
});

// ERROR HANDLER
App.use(Errors);

// EXPORT
module.exports = App;
