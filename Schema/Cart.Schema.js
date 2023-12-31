// IMPORT REQUIRED PACKAGES
const Mongoose = require("mongoose");

// IMPORT LOCAL REQUIRED FILES
const { NumberValidation } = require("../Validations/index");

// CART SCHEMA
const CartSchema = new Mongoose.Schema(
  {
    user: {
      type: Mongoose.Schema.ObjectId,
      ref: "UserSchema",
      required: [true, "Invalid User ID"],
    },
    products: [
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
  },
  {
    timestamps: true,
  }
);

// CUSTOM VALIDATION FOR PRODUCT QUANTITY
CartSchema.path("products.quantity").validate(function (Number) {
  return NumberValidation(Number, 1, 2);
}, "Quantity Should Between 1 To 2 Digits");

// POPULATE BEFORE FIND METHOD
CartSchema.pre(/^find/, function (next) {
  this.populate(
    {
      path: "user",
      select: "username -email",
    },
    {
      path: "products.productId",
    }
  );

  next();
});

module.exports = Mongoose.model("CartSchema", CartSchema);
