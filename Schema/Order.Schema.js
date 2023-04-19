const mongoose = require("mongoose");
const { EmailValidation, NumberValidation } = require("../Validations/index");

// ORDER SCHEMA
const OrderSchema = new mongoose.Schema(
  {
    shippingInformation: {
      firstname: {
        type: String,
        required: true,
        minlength: [2, "Firstname Should've More Than 2 Characaters"],
        maxlength: [30, "Firstname Can't Exceed 30 Characters"],
        trim: true,
      },
      lastname: {
        type: String,
        required: true,
        minlength: [2, "Lastname Should've More Than 2 Characaters"],
        maxlength: [30, "Lastname Can't Exceed 30 Characters"],
        trim: true,
      },
      email: {
        type: String,
        required: [true, "Please Enter Email"],
        lowercase: true,
        trim: true,
      },
      phone: {
        type: Number,
        required: [true, "Please Enter Phone Number"],
      },
      addressLine1: {
        type: String,
        required: [true, "Please Enter Address Line 1"],
        maxlength: [100, "Name Can't Exceed 100 Characters"],
        minlength: [20, "Name Should've More Than 20 Characaters"],
        trim: true,
      },
      addressLine2: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        required: [true, "Please Select City"],
      },
      state: {
        type: String,
        required: [true, "Please Select State"],
      },
      pinCode: {
        type: Number,
        required: [true, "Please Enter Pincode"],
      },
    },

    orderItems: [
      {
        productId: {
          type: mongoose.Schema.ObjectId,
          required: [true, "Invalid Product ID"],
        },
        quantity: {
          type: Number,
          required: [true, "Please Enter Quantity"],
        },
      },
    ],

    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "UserSchema",
      required: [true, "Please Enter User ID"],
    },

    paymentInfo: {
      id: {
        type: String,
        required: [true, "Invalid Payment ID"],
      },
      status: {
        type: String,
        enum: ["Pending", "Failed", "Completed"],
        required: [true, "Invalid Status"],
      },
    },

    orderStatus: {
      type: String,
      enum: ["Processing", "Dispatch", "Delivered", "Cancelled"],
      required: [true, "Invalid Order Status"],
      default: "Processing",
    },

    deliveredAt: Date,
  },
  {
    timestamps: true,
  }
);

// CUSTOM VALIDATION FOR EMAIL SHIPPING INFORMATION
OrderSchema.path("shippingInformation.email").validate(function (Email) {
  return EmailValidation(Email);
}, "Enter Valid Email");

// CUSTOM VALIDATION FOR PHONE SHIPPING INFORMATION
OrderSchema.path("shippingInformation.phone").validate(function (Number) {
  return NumberValidation(Number, 10, 10);
}, "Phone Number Should've 10 Digits");

// CUSTOM VALIDATION FOR PINCODE SHIPPING INFORMATION
OrderSchema.path("shippingInformation.pinCode").validate(function (Number) {
  return NumberValidation(Number, 6, 6);
}, "Pincode Should've 6 Digits");

// CUSTOM VALIDATION FOR ORDER ITEMS QUANTITY
OrderSchema.path("orderItems.quantity").validate(function (Number) {
  return NumberValidation(Number, 1, 2);
}, "Quantity Should Between 1 To 2 Digits");

// POPULATE BEFORE FIND METHOD
OrderSchema.pre(/^find/, function (next) {
  this.populate(
    {
      path: "userId",
      select: "username -email",
    },
    {
      path: "orderItems.productId",
    }
  );
  next();
});

module.exports = mongoose.model("OrderSchema", OrderSchema);
