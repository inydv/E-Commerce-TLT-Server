// IMPORT REQUIRED PACKAGES
const { Mongoose } = require("../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const { NumberValidation } = require("../Validations/index");

// PRODUCT SCHEMA
const ProductSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Product Name"],
      minlength: [20, "Name Should've More Than 20 Characaters"],
      maxlength: [100, "Name Can't Exceed 100 Characters"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please Enter Product Description"],
      minlength: [50, "Name Should've More Than 50 Characaters"],
      maxlength: [200, "Name Can't Exceed 200 Characters"],
      trim: true,
    },
    images: [
      {
        public_id: {
          type: String,
          required: [true, "Invalid Public ID"],
        },
        url: {
          type: String,
          required: [true, "Invalid URL"],
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please Select Product Category"],
    },
    subCategories: {
      type: String,
      required: [true, "Please Select Product Sub-Category"],
    },
    price: {
      type: Number,
      required: [true, "Please Enter Product Price"],
    },
    quantity: {
      type: Number,
      required: [true, "Please Enter Product Quantity"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: Mongoose.Schema.ObjectId,
          ref: "UserSchema",
        },
        rating: {
          type: Number,
        },
        comment: {
          type: String,
          minlength: [50, "Comment Should've More Than 50 Characters"],
          maxlength: [200, "Comment Can't Exceed 200 Characters"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// CUSTOM VALIDATION FOR PRICE
ProductSchema.path("price").validate(function (Number) {
  return NumberValidation(Number, 3, 5);
}, "Price Should Between 3 To 5 Digits");

// CUSTOM VALIDATION FOR QUANTITY
ProductSchema.path("quantity").validate(function (Number) {
  return NumberValidation(Number, 1, 2);
}, "Quantity Should Between 1 To 2 Digits");

// CUSTOM VALIDATION FOR RATINGS
ProductSchema.path("ratings").validate(function (Number) {
  return NumberValidation(Number, 0, 5);
}, "Rating Should Between 0 To 5 Digits");

// CUSTOM VALIDATION FOR RATING IN REVIEW
ProductSchema.path("reviews.rating").validate(function (Number) {
  return NumberValidation(Number, 0, 5);
}, "Rating Should Between 0 To 5 Digits");

// POPULATE BEFORE FIND METHOD
ProductSchema.pre(/^find/, function (next) {
  this.populate({
    path: "reviews.user",
    select: "-email",
  });
  next();
});

module.exports = Mongoose.model("ProductSchema", ProductSchema);
