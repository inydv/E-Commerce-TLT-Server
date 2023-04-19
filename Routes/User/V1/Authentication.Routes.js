const Router = require("express").Router();
const {
  RegisterUser,
} = require("../../../Controllers/User/V1/Authentication.Controllers");

Router.route("/register").post(RegisterUser);

module.exports = Router;
