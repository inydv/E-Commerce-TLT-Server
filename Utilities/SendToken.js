// REQUIRED LOCAL REQUIRED FILES
const { COOKIE } = require("../Constants/Configuration.Constant");
const { SUCCESSFUL } = require("../Constants/Messages.Constant");
const { SUCCESS } = require("../Constants/Status.Constant");

// EXPORTS
module.exports = async (user, res) => {
  // CREATE JSON WEB TOKEN
  const Token = user.GetJWTToken();

  // COOKIE OPRIONS
  const Options = {
    expires: COOKIE.EXPIRE,
    // maxAge: new Date(Date.now() + 24),
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    // secure: true
  };

  // DESTRUCTURING USER DOCUMENT
  const { password, isVerified, createdAt, __v, ...others } = user._doc;

  // SEND RESPONSE WITH COOKIE
  res.cookie("Token", Token, Options).status(SUCCESS).json({
    DATA: others,
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.LOGIN,
  });
};
