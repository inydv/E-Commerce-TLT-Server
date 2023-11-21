// IMPORT REQUIRED PACKAGES
const Razorpay = require("razorpay");
const Crypto = require("crypto");

// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../../../Utilities/index");
const { SUCCESS } = require("../../../Constants/Status.Constant");
const { SUCCESSFUL } = require("../../../Constants/Messages.Constant");
const { Create } = require("../../../Services/HandlerFactory.Service");
const { OrderSchema } = require("../../../Schema/index");

// CREATE RAZORPAY ORDER
exports.RazorpayCreateOrder = CatchAsyncError(async (req, res, next) => {
  // CREATE INSTANCE
  const Instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
  });

  // CREATE OPTIONS
  const Options = {
    // AMOUNT IN THE SMALLEST CURRENCY UNIT
    amount: Number(req.body.amount * 100),
    currency: "INR",
  }

  // CREATE ORDER IN RAZORPAY
  const Order = await Instance.orders.create(Options);

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.CREATE.replace("${NAME}", "RAZORPAY ORDER"),
    DATA: Order,
  });
});

// PAYMENT VERIFICATION
exports.PaymentVerification = CatchAsyncError(async (req, res, next) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req?.body?.paymentInfo;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = Crypto.createHmac('sha256', process.env.RAZORPAY_SECRET_KEY)
    .update(body.toString())
    .digest('hex');


  if (expectedSignature === razorpay_signature) {
    // UPDATE DATABASE
    req.body.user = req.user._id;
    await Create(OrderSchema, req.body);

    res.status(SUCCESS).json({
      SUCCESS: true,
    });
  } else {
    // SEND RESPONSE
    res.status(SUCCESS).json({
      SUCCESS: false,
    });
  }
});

// GET KEY ID
exports.GetKeyID = CatchAsyncError(async (req, res, next) => {
  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "RAZORPAY KEY ID"),
    DATA: {
      key_id: process.env.RAZORPAY_KEY_ID
    }
  });
});