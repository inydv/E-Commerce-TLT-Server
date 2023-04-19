// IMPORT REQUIRED PACKAGES
const { Cloudinary } = require("../../../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const { UserSchema, TokenSchema } = require("../../../Schema/index");
const { CatchAsyncError } = require("../../../Helpers/index");
const { ErrorHandler } = require("../../../Utilities/index");

// REGISTER USER
exports.RegisterUser = CatchAsyncError(async (req, res) => {
    console.log("He")
});
