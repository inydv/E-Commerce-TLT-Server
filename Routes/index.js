// IMPORT REQUIRED PACKAGES
const Express = require("express");

// IMPORT LOCAL REQUIRED FILES
const { ROUTES } = require("../Constants/Routes.Constant");
const { IsAuthenticatedUser, AuthorizeRole } = require("../Middlewares/index");

// IMPORT REQUIRED ROUTES -- USER/ADMIN
const AuthenticationRoute = require("./Authentication.Routes");

// IMPORT REQUIRED ROUTES -- USER
const UserCartRoute = require("./User/V1/Cart.Routes");
const UserContactRoute = require("./User/V1/Contact.Routes");
const UserOrderRoute = require("./User/V1/Order.Routes");
const UserPaymentRoute = require("./User/V1/Payment.Routes");
const UserProductRoute = require("./User/V1/Product.Routes");
const UserUserRoute = require("./User/V1/User.Routes");

// IMPORT REQUIRED ROUTES -- ADMIN
const AdminContactRoute = require("./Admin/V1/Contact.Routes");
const AdminOrderRoute = require("./Admin/V1/Order.Routes");
const AdminProductRoute = require("./Admin/V1/Product.Routes");
const AdminUserRoute = require("./Admin/V1/User.Routes");

// ROUTER
const AuthRouter = Express.Router();
const UserRouter = Express.Router();
const AdminRouter = Express.Router();

// ROUTES -- USER/ADMIN
const AuthRoute = [
  {
    Path: ROUTES.AUTH,
    Route: AuthenticationRoute,
  },
];

// ROUTES -- USER
const UserRoutes = [
  {
    Path: ROUTES.CART,
    Route: UserCartRoute,
  },
  {
    Path: ROUTES.CONTACT,
    Route: UserContactRoute,
  },
  {
    Path: ROUTES.ORDER,
    Route: UserOrderRoute,
  },
  {
    Path: ROUTES.PAYMENT,
    Route: UserPaymentRoute,
  },
  {
    Path: ROUTES.PRODUCT,
    Route: UserProductRoute,
  },
  {
    Path: ROUTES.USER,
    Route: UserUserRoute,
  },
];

// ROUTES -- ADMIN
const AdminRoutes = [
  {
    Path: ROUTES.CONTACT,
    Route: AdminContactRoute,
  },
  {
    Path: ROUTES.ORDER,
    Route: AdminOrderRoute,
  },
  {
    Path: ROUTES.PRODUCT,
    Route: AdminProductRoute,
  },
  {
    Path: ROUTES.USER,
    Route: AdminUserRoute,
  },
];

// ROUTES CONFIG
AdminRouter.use(IsAuthenticatedUser, AuthorizeRole("Admin"));

// USING THE ROUTES
AuthRoute.forEach((route) => AuthRouter.use(route.Path, route.Route));
UserRoutes.forEach((route) => {
  // IF ROUTE IS PRODUCT THEN NO NEED FOR AUTHENTICATION
  if (route.Path === ROUTES.PRODUCT) {
    UserRouter.use(route.Path, route.Route);
  } else {
    UserRouter.use(route.Path, IsAuthenticatedUser, route.Route);
  }
});
AdminRoutes.forEach((route) => AdminRouter.use(route.Path, route.Route));

// EXPORT
module.exports = {
  AuthRouter,
  UserRouter,
  AdminRouter,
};
