// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../../../Utilities/index");
const { GetById, GetAll } = require("../../../Services/HandlerFactory.Service");
const { SUCCESSFUL, ERROR } = require("../../../Constants/Messages.Constant");
const {
  SUCCESS,
  UNPROCESSABLE,
  BAD,
} = require("../../../Constants/Status.Constant");
const { OrderSchema, ProductSchema } = require("../../../Schema/index");

// UPDATE STOCK FUNCTION
async function UpdateStock(id, quantity, next) {
  // FIND PRODUCT
  const product = await GetById(ProductSchema, id);

  // IF ORDERS NOT FOUND
  if (!product) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "PRODUCT"), BAD)
    );
  }

  // DECREASE STOCK
  product.Stock -= quantity;

  // SAVE PRODUCT
  await product.save();
}

// GET ALL ORDERS
exports.GetAllOrders = CatchAsyncError(async (req, res, next) => {
  // FIND ALL ORDERS
  const orders = await GetAll(OrderSchema);

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

// UPDATE ORDER STATUS
exports.UpdateOrderStatus = CatchAsyncError(async (req, res, next) => {
  // CHECK UPDATE OTHER THAN STATUS
  if (
    req.body.shippingInformation ||
    req.body.orderItems ||
    req.body.user ||
    req.body.paymentInfo
  ) {
    return next(
      new ErrorHandler(
        ERROR.NOT_CHANGE.replace("${NAME}", "INFORMATION OTHER THAN STATUS"),
        UNPROCESSABLE
      )
    );
  }

  // FIND ORDER
  let order = await GetById(OrderSchema, req.params.orderId);

  // IF ORDER IS NOT FOUND
  if (!order) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "ORDER"), BAD)
    );
  }

  // IF ORDER IS ALREADY CANCELLED
  if (order.orderStatus === "Cancelled") {
    return next(
      new ErrorHandler(
        ERROR.ORDER.replace("${NAME}", "CANCELLED"),
        UNPROCESSABLE
      )
    );
  }

  // IF ORDER IS ALREADY DELIVERED
  if (order.orderStatus === "Delivered") {
    return next(
      new ErrorHandler(
        ERROR.ORDER.replace("${NAME}", "DELIVERED"),
        UNPROCESSABLE
      )
    );
  }

  // IF ORDER IS SHIPPED THEN WE CAN'T BACK TO PROCESSING
  if (
    order.orderStatus === "Shipped" &&
    req.body.orderStatus === "Processing"
  ) {
    return next(
      new ErrorHandler(ERROR.ORDER.replace("${NAME}", "SHIPPED"), UNPROCESSABLE)
    );
  }

  // IF ORDER IS GOING TO SHIPPED
  if (req.body.orderStatus === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await UpdateStock(o.product, o.quantity, next);
    });
  }

  // CHANGE PRDER STATUS
  order.orderStatus = req.body.orderStatus;

  // IF ORDER IS GOING TO DELIVERED
  if (req.body.orderStatus === "Delivered") {
    order.deliveredAt = Date.now();
  }

  // FIND ORDER AND UPDATE
  order = await order.save();

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.UPDATE.replace("${NAME}", "ORDER STATUS"),
    DATA: order,
  });
});

// DELETE ORDER
exports.DeleteOrder = CatchAsyncError(async (req, res, next) => {
  // FIND ORDER
  const order = await GetById(OrderSchema, req.params.orderId);

  // IF ORDER IS NOT FOUND
  if (!order) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "ORDER"), BAD)
    );
  }

  // REMOVE ORDER
  await order.deleteOne();

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.DELETE.replace("${NAME}", "ORDER"),
  });
});
