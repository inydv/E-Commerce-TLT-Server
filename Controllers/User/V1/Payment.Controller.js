// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError } = require("../../../Utilities/index");
const { SUCCESS } = require("../../../Constants/Status.Constant");

// SEND STRIPE API KEY
exports.SendStripeApiKey = CatchAsyncError(async (req, res, next) => {
  // IMPORT REQUIRED PACKAGES
  const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // MAKE PAYMENT
  const myPayment = await Stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "THE LITTLE THINGS",
    },
  });

  // SEND RESPONSE
  res.status(SUCCESS).json({ CLIENT_SECRET: myPayment.client_secret });
});

// PROCESS PAYMENT
exports.ProcessPayment = CatchAsyncError(async (req, res, next) => {
  // SEND RESPONSE
  res.status(SUCCESS).json({ STRIPE_API_KEY: process.env.STRIPE_API_KEY });
});
