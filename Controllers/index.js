// IMPORT REQUIRED CONTROLLERS -- USER/ADMIN
const {
  Register,
  Login,
  Logout,
  ForgotPassword,
  ResetPassword,
  VerifyAccount,
} = require("./Authentication.Controllers");

// IMPORT REQUIRED CONTROLLERS -- USER
const {
  CreateCart,
  DeleteCart,
  UpdateCart,
} = require("./User/V1/Cart.Controllers");
const { CreateContact } = require("./User/V1/Contact.Controllers");
const {
  CreateOrder,
  GetMyOrders,
  GetOrderDetail,
} = require("./User/V1/Order.Controllers");
const {
  ProcessPayment,
  SendStripeApiKey,
} = require("./User/V1/Payment.Controller");
const {
  CreateProductReview,
  DeleteProductReview,
  GetAllProduct,
  GetProductDetail,
  GetProductReview,
} = require("./User/V1/Product.Controllers");
const { GetMyInformation } = require("./User/V1/User.Controllers");

// IMPORT REQUIRED CONTROLLERS -- ADMIN
const {
  DeleteContactDetail,
  GetAllContacts,
  GetContactDetail,
  UpdateContactDetail,
} = require("./Admin/V1/Contact.Controllers");
const {
  DeleteOrder,
  GetAllOrders,
  UpdateOrder,
} = require("./Admin/V1/Order.Controllers");
const {
  CreateProduct,
  DeleteProduct,
  UpdateProduct,
} = require("./Admin/V1/Product.Controllers");
const {
  DeleteUser,
  GetAllUsers,
  GetUserDetail,
  UpdateUserRole,
} = require("./Admin/V1/User.Controllers");

// EXPORT
module.exports = {
  Register,
  Login,
  Logout,
  ForgotPassword,
  ResetPassword,
  VerifyAccount,
  CreateCart,
  DeleteCart,
  UpdateCart,
  CreateContact,
  CreateOrder,
  GetMyOrders,
  GetOrderDetail,
  ProcessPayment,
  SendStripeApiKey,
  CreateProductReview,
  DeleteProductReview,
  GetAllProduct,
  GetProductDetail,
  GetProductReview,
  GetMyInformation,
  DeleteContactDetail,
  GetAllContacts,
  GetContactDetail,
  UpdateContactDetail,
  DeleteOrder,
  GetAllOrders,
  UpdateOrder,
  CreateProduct,
  DeleteProduct,
  UpdateProduct,
  DeleteUser,
  GetAllUsers,
  GetUserDetail,
  UpdateUserRole,
};
