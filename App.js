// IMPORT PACKAGES
const {
  Express,
  CookieParser,
  Cors,
  BodyParser,
} = require("./Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const { UserAuthenticationRoute } = require("./Routes/index");
const { Errors } = require("./Helpers/index");

// DOTENV CONFIG
require("dotenv").config({ path: "./Configs/config.env" });

//EXPRESS
const App = Express();

// CONFIGS
App.use(Express.json());
App.use(CookieParser());
App.use(BodyParser.urlencoded({ extended: true }));

// CORS
App.use(
  Cors({
    origin: "*",
    preflightContinue: true,
    credentials: true,
  })
);

// USE LOCAL REQUIRED FILES
App.use("/api/v1/user/authentication", UserAuthenticationRoute);

// ERROR HANDLER
App.use(Errors);

module.exports = App;
