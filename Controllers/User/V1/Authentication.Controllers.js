const { UserSchema, TokenSchema } = require("../../../Schema/index");
const { CatchAsyncError } = require("../../../Helpers/index");
const { ErrorHandler } = require("../../../Utilities/index");
const Cloudinary = require("cloudinary");

exports.RegisterUser = CatchAsyncError(async (req, res) => {});
