// AUTHENTICATION
const AUTHENTICATION = "/api/v1";

// USER BASE URL
const USER = "/api/v1/user";

// ADMIN BASE URL
const ADMIN = "/api/v1/admin";

// EXPORT ROUTES
module.exports = {
  // BASE URLS
  BASE_URL: {
    AUTHENTICATION: AUTHENTICATION,
    USER: USER,
    ADMIN: ADMIN,
  },

  // ROUTES
  ROUTES: {
    AUTH: "/authentication",
    CART: "/cart",
    CONTACT: "/contact",
    ORDER: "/order",
    PAYMENT: "/payment",
    PRODUCT: "/product",
    USER: "/user",
  },
};
