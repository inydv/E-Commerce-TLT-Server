// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError } = require("../../../Utilities/index");
const { ContactSchema } = require("../../../Schema/index");
const { Create } = require("../../../Services/HandlerFactory.Service");
const { SUCCESSFUL } = require("../../../Constants/Messages.Constant");
const { SUCCESS } = require("../../../Constants/Status.Constant");

// CREATE CONTACT
exports.CreateContact = CatchAsyncError(async (req, res, next) => {
  // CREATE
  const contact = await Create(ContactSchema, req.body);

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.SUBMIT.replace("${NAME}", "CONTACT FORM"),
    DATA: contact,
  });
});
