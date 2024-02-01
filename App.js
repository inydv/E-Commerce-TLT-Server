// IMPORT REUIRED PACKAGES
const Express = require("express");
const CookieParser = require("cookie-parser");
const Cors = require("cors");
const BodyParser = require("body-parser");

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

// CROSS-SITE SCRIPTING - SETS SECURITY-RELATED HTTP RESPONSE HEADERS TO PROTECT AGAINST SOME WELL-KNOWN WEB VULNERABILITIES
const helmet = require("helmet");
App.use(helmet({
  crossOriginEmbedderPolicy: false,
  crossOriginOpenerPolicy: 'cross-origin',
  crossOriginResourcePolicy: 'cross-origin',
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "img-src": ["'self'", "data: https://res.cloudinary.com"],
      "script-src": ["'self'", "https://checkout.razorpay.com"],
      "frame-src": ["'self'", "https://api.razorpay.com"],
      "default-src": ["'self'"]
    },
  },
}));

// XSS ATTACK - SANITIZES USER INPUT COMING FROM POST REQUEST BODY (REQ.BODY), GET REQUEST QUERY (REQ.QUERY) AND URL PARAMETERS (REQ.PARAMS)
const xss = require('xss-clean');
App.use(xss());

// DoS ATTACK - PUTS THE ARRAY PARAMETERS IN REQ.QUERY AND/OR REQ.BODY ASIDES AND JUST SELECTS THE LAST PARAMETER VALUE TO AVOID HTTP PARAMETER POLLUTION ATTACKS
const hpp = require('hpp');
App.use(hpp());

// SEARCHES FOR ANY KEYS IN OBJECTS THAT BEGIN WITH A '$' SIGN OR CONTAIN A '.' FROM REQ.BODY, REQ.QUERY OR REQ.PARAMS AND EITHER REMOVES SUCH KEYS AND DATA OR REPLACES THE PROHIBITED CHARACTERS WITH ANOTHER ALLOWED CHARACTER
const mongoSanitize = require('express-mongo-sanitize');
App.use(mongoSanitize());

// APP USE JSON FORMAT
App.use(Express.json({ limit: '50kb' }));
App.use(Express.urlencoded({ limit: '50mb', extended: true }));

// PARSER CONFIGS
App.use(CookieParser());
App.use(BodyParser.urlencoded({ limit: '50mb', extended: true }));

// CORS
App.use(
  Cors({
    origin: CORS.ORIGIN,
    methods: CORS.METHODS,
    // preflightContinue: true,
    credentials: true,
  })
);

// DDoS ATTACK - USED TO LIMIT IP ADDRESS FROM MAKING REPEATED REQUESTS TO API ENDPOINTS
const apiLimiter = require('express-rate-limit').rateLimit({
  windowMS: 1 * 60 * 1000,  // 1 MINUTE
  max: 30
});

// SET VIEW ENGINE
App.set("view engine", "ejs");

// USE LOCAL REQUIRED FILES
App.use(BASE_URL.AUTHENTICATION, apiLimiter, AuthRouter);
App.use(BASE_URL.USER, UserRouter);
App.use(BASE_URL.ADMIN, AdminRouter);

// RETURN 404 NOT FOUND FOR ANY UNKNOWN API REQUESTS
// App.use((req, res, next) => {
//   next(new ErrorHandler(ERROR.API_NOT_FOUND, NOT_FOUND));
// });

// ERROR HANDLER
App.use(Errors);

// EXPORT
module.exports = App;
