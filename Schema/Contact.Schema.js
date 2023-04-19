// IMPORT REQUIRED PACKAGES
const { Mongoose } = require("../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const { EmailValidation } = require("../Validations/index");

// CONTACT SCHEMA
const ContactSchema = new Mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please Enter Firstname"],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "Please Enter Lastname"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      lowercase: true,
      trim: true,
    },
    subject: {
      type: String,
      required: [true, "Please Enter Subject"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Please Enter Message"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// CUSTOM VALIDATION FOR EMAIL
ContactSchema.path("email").validate(function (Email) {
  return EmailValidation(Email);
}, "Enter Valid Email");

module.exports = Mongoose.model("ContactSchema", ContactSchema);
