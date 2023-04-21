// USER BASE URL
const USER = "/api/v1/user";

// ADMIN BASE URL
const ADMIN = "/api/v1/admin";

// EXPORT ROUTES
module.exports = {
  // USER ROUTES
  USER: {
    AUTHENTICATION: USER + "/authentication",
    PRODUCT: USER + "/product",
    ORDER: USER + "/order",
    PAYMENT: USER + "/payment",
    USER: USER + "/user",
  },

  // ADMIN ROUTES
  ADMIN: {
    AUTHENTICATION: ADMIN + "/authentication",
    PRODUCT: ADMIN + "/product",
    ORDER: ADMIN + "/order",
    USER: ADMIN + "/user",
  },
};
