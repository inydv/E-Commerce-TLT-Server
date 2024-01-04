// IMPORT REQUIRED PACKAGES
const Mongoose = require("mongoose");

// IMPORT LOCAL REQUIRED FILES
const { EmailValidation, NumberValidation } = require("../Validations/index");

// ORDER SCHEMA
const OrderSchema = new Mongoose.Schema(
  {
    shippingInformation: {
      name: {
        type: String,
        required: true,
        minlength: [2, "Name Should've More Than 2 Characaters"],
        maxlength: [50, "Name Can't Exceed 30 Characters"],
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
      address: {
        type: String,
        required: [true, "Please Enter Address"],
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
      pincode: {
        type: Number,
        required: [true, "Please Enter Pincode"],
      },
    },

    orderItems: [
      {
        product: {
          type: Mongoose.Schema.ObjectId,
          ref: "ProductSchema",
          required: [true, "Invalid Product ID"],
        },
        quantity: {
          type: Number,
          required: [true, "Please Enter Quantity"],
        },
      },
    ],

    user: {
      type: Mongoose.Schema.ObjectId,
      ref: "UserSchema",
      required: [true, "Please Enter User ID"],
    },

    paymentInfo: {
      razorpay_order_id: {
        type: String,
        required: [true, "Invalid Razorpay Order ID"],
      },
      razorpay_payment_id: {
        type: String,
        required: [true, "Invalid Razorpay Payment ID"],
      },
      razorpay_signature: {
        type: String,
        required: [true, "Invalid Razorpay Signature"],
      },
    },

    status: {
      type: String,
      enum: ["Processing", "Out For Delivery", "Delivered", "Cancelled"],
      default: "Processing",
    },

    deliveredAt: {
      type: Date,
      default: () => new Date(+new Date() + 4 * 24 * 60 * 60 * 1000)
    },
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
OrderSchema.path("shippingInformation.pincode").validate(function (Number) {
  return NumberValidation(Number, 6, 6);
}, "Pincode Should've 6 Digits");

// CUSTOM VALIDATION FOR ORDER ITEMS QUANTITY
OrderSchema.path("orderItems.quantity").validate(function (Number) {
  return NumberValidation(Number, 1, 2);
}, "Quantity Should Between 1 To 2 Digits");

// POPULATE BEFORE FIND METHOD
OrderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "-email",
  });

  this.populate({
    path: "orderItems",
    populate: {
      path: "product",
      select: "name images price",
    },
  });

  next();
});

module.exports = Mongoose.model("OrderSchema", OrderSchema);
