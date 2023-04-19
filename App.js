// IMPORT PACKAGES
const Express = require("express");
const CookieParser = require("cookie-parser");
const Cors = require("cors");
const BodyParser = require("body-parser");
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

// IMPORT LOCAL REQUIRED FILES
const { UserAuthenticationRoute } = require("./Routes/index");

// USE LOCAL REQUIRED FILES
App.use("/api/v1/user/authentication", UserAuthenticationRoute);

// ERROR HANDLER
App.use(Errors);

module.exports = App;
