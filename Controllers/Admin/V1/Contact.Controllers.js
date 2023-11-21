// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../../../Utilities/index");
const {
  Update,
  GetById,
  GetAll,
} = require("../../../Services/HandlerFactory.Service");
const { SUCCESSFUL, ERROR } = require("../../../Constants/Messages.Constant");
const {
  SUCCESS,
  UNPROCESSABLE,
  BAD,
} = require("../../../Constants/Status.Constant");
const { ContactSchema } = require("../../../Schema/index");

// GET ALL CONTACTS
exports.GetAllContacts = CatchAsyncError(async (req, res, next) => {
  // FIND ALL CONTACTS
  const contacts = await GetAll(ContactSchema);

  // IF CONTACTS NOT FOUND
  if (!contacts) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "USERS"), BAD)
    );
  }

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "CONTACT"),
    DATA: contacts,
  });
});

// GET CONTACT DELTAIL
exports.GetContactDetail = CatchAsyncError(async (req, res, next) => {
  // FIND ALL CONTACTS
  const contact = await GetById(ContactSchema, req.params.contactId);

  // IF CONTACTS NOT FOUND
  if (!contact) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "CONTACT"), BAD)
    );
  }

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "CONTACT"),
    DATA: contact,
  });
});

// UPDATE CONTACT STATUS
exports.UpdateContactStatus = CatchAsyncError(async (req, res, next) => {
  // CHECK UPDATE OTHER THAN STATUS
  if (
    req.body.firstname ||
    req.body.lastname ||
    req.body.email ||
    req.body.subject ||
    req.body.message ||
    req.body.user
  ) {
    return next(
      new ErrorHandler(
        ERROR.NOT_CHANGE.replace("${NAME}", "INFORMATION OTHER THAN STATUS"),
        UNPROCESSABLE
      )
    );
  }

  // FIND CONTACT AND UPADTE
  const contact = await Update(ContactSchema, req.params.contactId, req.body);

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.UPDATE.replace("${NAME}", "CONTACT STATUS"),
    DATA: contact,
  });
});

// DELETE CONTACT
exports.DeleteContactDetail = CatchAsyncError(async (req, res, next) => {
  // FIND CONTACT
  const contact = await GetById(ContactSchema, req.params.contactId);

  // IF CONTACT IS NOT FOUND
  if (!contact) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "CONTACT"), BAD)
    );
  }

  // REMOVE CONTACT
  await contact.deleteOne();

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.DELETE.replace("${NAME}", "CONTACT"),
  });
});
