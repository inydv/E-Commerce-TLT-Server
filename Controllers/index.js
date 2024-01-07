// IMPORT REQUIRED CONTROLLERS -- USER/ADMIN
const { Register, Login, Logout, ForgotPassword, ResetPassword, VerifyAccount } = require("./Authentication.Controllers");

// IMPORT REQUIRED CONTROLLERS -- USER
const { GetCart, UpdateCart } = require("./User/V1/Cart.Controllers");
const { CreateContact } = require("./User/V1/Contact.Controllers");
const { GetMyOrders, GetOrderDetail } = require("./User/V1/Order.Controllers");
const { RazorpayCreateOrder, GetKeyID, PaymentVerification } = require("./User/V1/Payment.Controller");
const { DeleteProductReview, GetAllProduct, GetProductDetail, UpdateProductReview } = require("./User/V1/Product.Controllers");
const { GetMyInformation, UpdateUserInformation } = require("./User/V1/User.Controllers");

// IMPORT REQUIRED CONTROLLERS -- ADMIN
const { DeleteContactDetail, GetAllContacts, GetContactDetail, UpdateContactStatus, CountContacts } = require("./Admin/V1/Contact.Controllers");
const { DeleteOrder, GetAllOrders, UpdateOrderStatus, CountOrders } = require("./Admin/V1/Order.Controllers");
const { CreateProduct, DeleteProduct, UpdateProduct, DeleteUserProductReview, CountProducts } = require("./Admin/V1/Product.Controllers");
const { DeleteUser, GetAllUsers, GetUserDetail, UpdateUserRole, CountUsers } = require("./Admin/V1/User.Controllers");

// EXPORT
module.exports = { Register, Login, Logout, ForgotPassword, ResetPassword, VerifyAccount, GetCart, UpdateCart, CreateContact, GetMyOrders, GetOrderDetail, RazorpayCreateOrder, GetKeyID, PaymentVerification, DeleteProductReview, GetAllProduct, GetProductDetail, UpdateProductReview, GetMyInformation, UpdateUserInformation, DeleteContactDetail, GetAllContacts, GetContactDetail, UpdateContactStatus, CountContacts, DeleteOrder, GetAllOrders, UpdateOrderStatus, CountOrders, CreateProduct, DeleteProduct, UpdateProduct, DeleteUserProductReview, CountProducts, DeleteUser, GetAllUsers, GetUserDetail, UpdateUserRole, CountUsers };
