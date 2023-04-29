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
const { CreateCart, UpdateCart } = require("./User/V1/Cart.Controllers");
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
  DeleteProductReview,
  GetAllProduct,
  GetProductDetail,
  UpdateProductReview,
} = require("./User/V1/Product.Controllers");
const {
  GetMyInformation,
  UpdateUserInformation,
} = require("./User/V1/User.Controllers");

// IMPORT REQUIRED CONTROLLERS -- ADMIN
const {
  DeleteContactDetail,
  GetAllContacts,
  GetContactDetail,
  UpdateContactStatus,
} = require("./Admin/V1/Contact.Controllers");
const {
  DeleteOrder,
  GetAllOrders,
  UpdateOrderStatus,
} = require("./Admin/V1/Order.Controllers");
const {
  CreateProduct,
  DeleteProduct,
  UpdateProduct,
  DeleteUserProductReview,
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
  UpdateCart,
  CreateContact,
  CreateOrder,
  GetMyOrders,
  GetOrderDetail,
  ProcessPayment,
  SendStripeApiKey,
  DeleteProductReview,
  GetAllProduct,
  GetProductDetail,
  UpdateProductReview,
  GetMyInformation,
  UpdateUserInformation,
  DeleteContactDetail,
  GetAllContacts,
  GetContactDetail,
  UpdateContactStatus,
  DeleteOrder,
  GetAllOrders,
  UpdateOrderStatus,
  CreateProduct,
  DeleteProduct,
  UpdateProduct,
  DeleteUserProductReview,
  DeleteUser,
  GetAllUsers,
  GetUserDetail,
  UpdateUserRole,
};
