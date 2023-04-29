// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../../../Utilities/index");
const { GetById, Get, Create } = require("../../../Services/HandlerFactory.Service");
const { SUCCESSFUL, ERROR } = require("../../../Constants/Messages.Constant");
const { SUCCESS, BAD } = require("../../../Constants/Status.Constant");
const { OrderSchema } = require("../../../Schema/index");

// GET MY ORDERS
exports.GetMyOrders = CatchAsyncError(async (req, res, next) => {
  // FIND ALL ORDERS
  const orders = await Get(OrderSchema, { user: req.user._id });

  // IF ORDERS NOT FOUND
  if (!orders) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "ORDERS"), BAD)
    );
  }

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "ORDERS"),
    DATA: orders,
  });
});

// GET ORDER DETAIL
exports.GetOrderDetail = CatchAsyncError(async (req, res, next) => {
  // FIND ORDER
  const order = await GetById(OrderSchema, req.params.orderId);

  // IF ORDER IS NOT FOUND
  if (!order) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "ORDER"), BAD)
    );
  }

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "ORDER"),
    DATA: order,
  });
});

// CREATE ORDER
exports.CreateOrder = CatchAsyncError(async (req, res, next) => {
  // ADD USER IN REQUEST BODY
  req.body.user = req.user._id;

  // CREATE
  const order = await Create(OrderSchema, req.body);

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.CREATE.replace("${NAME}", "ORDER"),
    DATA: order,
  });
});
