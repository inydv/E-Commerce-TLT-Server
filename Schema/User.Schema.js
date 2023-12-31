// IMPORT REQUIRED PACKAGES
const Mongoose = require("mongoose");
const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

// IMPORT LOCAL REQUIRED FILES
const { EmailValidation, NumberValidation } = require("../Validations/index");

// USER SCHEMA
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter Username"],
    maxlength: [30, "Name Can't Exceed Characters"],
    minlength: [4, "Name Should've More Than 4 Characaters"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: [true, "Please Enter Unique Email"],
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    minlength: [8, "Password Should've More Than 8 Characaters"],
    maxlength: [24, "Password Can't Exceed 24 Characaters"],
    select: false,
    trim: true,
  },
  phone: {
    type: Number,
  },
  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
  },
  role: {
    type: String,
    enum: ["User", "Admin", "Seller"],
    required: [true, "Invalid Role"],
    default: "User",
  },
  isVerified: {
    type: Boolean,
    required: [true, "Invalid Verification"],
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 86400, // EXPIRES IN 24 HOURS
  },
});

// CUSTOM VALIDATION FOR EMAIL
UserSchema.path("email").validate(function (Email) {
  return EmailValidation(Email);
}, "Enter Valid Email");

// CUSTOM VALIDATION FOR PHONE
UserSchema.path("phone").validate(function (Number) {
  return NumberValidation(Number, 10, 10);
}, "Phone Number Should've 10 Digits");

// HASHED THE PASSWORD BEFORE SAVING INTO DATABASE
UserSchema.pre("save", function (next) {
  // LET, WE HAVE TO CHANGE FIELDS EXCEPT PASSWORD THEN THIS CONDITION WILL NOT EXECUTE
  if (this.isModified("password")) {
    this.password = CryptoJS.AES.encrypt(
      this.password,
      process.env.CRYPTO_HASH
    ).toString();
  }

  next();
});

// COMPARE PASSWORD
UserSchema.methods.ComparePassword = function (EnteredPassword) {
  const HashedPassword = CryptoJS.AES.decrypt(
    this.password,
    process.env.CRYPTO_HASH
  ).toString(CryptoJS.enc.Utf8);

  if (HashedPassword === EnteredPassword) {
    return true;
  }

  return false;
};

// JWT TOKEN
UserSchema.methods.GetJWTToken = function () {
  return JWT.sign({ id: this._id }, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = Mongoose.model("UserSchema", UserSchema);
