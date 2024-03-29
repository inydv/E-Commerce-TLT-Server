// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../../../Utilities/index");
const { GetById, CountDocument, GetUsingPagination } = require("../../../Services/HandlerFactory.Service");
const { SUCCESSFUL, ERROR } = require("../../../Constants/Messages.Constant");
const { SUCCESS, UNPROCESSABLE, BAD } = require("../../../Constants/Status.Constant");
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
  const orders = await GetUsingPagination(OrderSchema, {}, req.query);

  // IF ORDERS NOT FOUND
  if (!orders) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "ORDERS"), BAD)
    );
  }

  // COUNT FILTERED ORDERS
  const filteredOrdersCount = orders.length;

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "ORDERS"),
    DATA: {
      LISTS: orders,
      NUMBER_OF_FILTERED_LIST: filteredOrdersCount,
    },
  });
});

// UPDATE ORDER STATUS
exports.UpdateOrderStatus = CatchAsyncError(async (req, res, next) => {
  // CHECK UPDATE OTHER THAN STATUS
  if (req.body.shippingInformation || req.body.orderItems || req.body.user || req.body.paymentInfo) {
    return next(
      new ErrorHandler(ERROR.NOT_CHANGE.replace("${NAME}", "INFORMATION OTHER THAN STATUS"), UNPROCESSABLE)
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
  if (order.status === "Cancelled") {
    return next(
      new ErrorHandler(ERROR.ORDER.replace("${NAME}", "CANCELLED"), UNPROCESSABLE)
    );
  }

  // IF ORDER IS ALREADY DELIVERED
  if (order.status === "Delivered") {
    return next(
      new ErrorHandler(
        ERROR.ORDER.replace("${NAME}", "DELIVERED"),
        UNPROCESSABLE
      )
    );
  }

  // IF ORDER IS SHIPPED THEN WE CAN'T BACK TO PROCESSING
  if (
    order.status === "Shipped" &&
    req.body.status === "Processing"
  ) {
    return next(
      new ErrorHandler(ERROR.ORDER.replace("${NAME}", "SHIPPED"), UNPROCESSABLE)
    );
  }

  // IF ORDER IS GOING TO SHIPPED
  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await UpdateStock(o.product, o.quantity, next);
    });
  }

  // CHANGE PRDER STATUS
  order.status = req.body.status;

  // IF ORDER IS GOING TO DELIVERED
  if (req.body.status === "Delivered") {
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

// COUNT ORDERS
exports.CountOrders = CatchAsyncError(async (req, res, next) => {
  // FIND ORDERS COUNT
  const allOrders = await CountDocument(OrderSchema);
  const processingOrders = await CountDocument(OrderSchema, { status: "Processing" });
  const outForDeliveryOrders = await CountDocument(OrderSchema, { status: "Out For Delivery" });
  const deliveredOrders = await CountDocument(OrderSchema, { status: "Delivered" });
  const cancelledOrders = await CountDocument(OrderSchema, { status: "Cancelled" });

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "ORDERS COUNT"),
    DATA: {
      ALL_ORDERS: allOrders,
      PROCESSING_ORDERS: processingOrders,
      OUT_FOR_DELIVERY_ORDERS: outForDeliveryOrders,
      DELIVERED_ORDERS: deliveredOrders,
      CANCELLED_ORDERS: cancelledOrders
    },
  });
});