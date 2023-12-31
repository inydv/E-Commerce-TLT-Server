// IMPORT REQUIRED PACKAGES
const Mongoose = require("mongoose");
const Crypto = require("crypto");

// TOKEN SCHEMA
const TokenSchema = new Mongoose.Schema({
  userId: {
    type: Mongoose.SchemaTypes.ObjectId,
    ref: "UserSchema",
    required: [true, "Invalid User ID"],
  },
  type: {
    type: String,
    enum: ["Verification", "ResetPassword"],
    required: [true, "Invalid Type"],
  },
  token: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 86400, // EXPIRES IN 24 HOURS
  },
});

// GENERATE TOKEN BEFORE CREATE
TokenSchema.pre("save", function (next) {
  this.token = Crypto.randomBytes(20).toString("hex");

  next();
});

module.exports = Mongoose.model("TokenModel", TokenSchema);
