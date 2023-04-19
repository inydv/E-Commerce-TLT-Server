const Mongoose = require("mongoose");

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
    required: [true, "Invalid Token"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 86400, // EXPIRES IN 24 HOURS
  },
});

module.exports = Mongoose.model("TokenModel", TokenSchema);
