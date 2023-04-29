// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError } = require("../../../Utilities/index");
const { ContactSchema } = require("../../../Schema/index");
const { Create } = require("../../../Services/HandlerFactory.Service");
const { SUCCESSFUL } = require("../../../Constants/Messages.Constant");
const { SUCCESS } = require("../../../Constants/Status.Constant");

// CREATE CONTACT
exports.CreateContact = CatchAsyncError(async (req, res, next) => {
  // ADD USER IN REQUEST BODY
  req.body.user = req.user._id;

  // CREATE
  const contact = await Create(ContactSchema, req.body);

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.CREATE.replace("${NAME}", "CONTACT"),
    DATA: contact,
  });
});
