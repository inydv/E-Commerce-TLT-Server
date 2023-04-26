// IMPORT REUIRED PACKAGES
const {
  Express,
  CookieParser,
  Cors,
  BodyParser,
} = require("./Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const { AuthRouter, UserRouter, AdminRouter } = require("./Routes/index");
const { Errors } = require("./Middlewares/index");
const { CORS } = require("./Constants/Configuration.Constant");
const { ERROR } = require("./Constants/Messages.Constant");
const { NOT_FOUND } = require("./Constants/Status.Constant");
const { BASE_URL } = require("./Constants/Routes.Constant");
const { ErrorHandler } = require("./Utilities/index");

// DOTENV CONFIG
require("dotenv").config({ path: "./Configs/config.env" });

//EXPRESS
const App = Express();

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

// SET VIEW ENGINE
App.set("view engine", "ejs");

// USE LOCAL REQUIRED FILES
App.use(BASE_URL.AUTHENTICATION, AuthRouter);
App.use(BASE_URL.USER, UserRouter);
App.use(BASE_URL.ADMIN, AdminRouter);

// RETURN 404 NOT FOUND FOR ANY UNKNOWN API REQUESTS
App.use((req, res, next) => {
  next(new ErrorHandler(ERROR.API_NOT_FOUND, NOT_FOUND));
});

// ERROR HANDLER
App.use(Errors);

// EXPORT
module.exports = App;
