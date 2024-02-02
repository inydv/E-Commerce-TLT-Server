// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../../../Utilities/index");
const { Update, GetById, CountDocument, GetUsingPagination } = require("../../../Services/HandlerFactory.Service");
const { SUCCESSFUL, ERROR } = require("../../../Constants/Messages.Constant");
const { SUCCESS, UNPROCESSABLE, BAD } = require("../../../Constants/Status.Constant");
const { ContactSchema } = require("../../../Schema/index");

// GET ALL CONTACTS
exports.GetAllContacts = CatchAsyncError(async (req, res, next) => {
  // FIND ALL CONTACTS
  const contacts = await GetUsingPagination(ContactSchema, {}, req.query);

  // IF CONTACTS NOT FOUND
  if (!contacts) {
    return next(
      new ErrorHandler(ERROR.NOT_FOUND.replace("${NAME}", "CONTACTS"), BAD)
    );
  }

  // COUNT FILTERED CONTACTS
  const filteredContactsCount = contacts.length;

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "CONTACT"),
    DATA: {
      LISTS: contacts,
      NUMBER_OF_FILTERED_LIST: filteredContactsCount,
    },
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
  // FIND CONTACT AND UPADTE
  const contact = await Update(ContactSchema, req.params.contactId, {
    status: req.body.status
  });

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

// COUNT CONTACT
exports.CountContacts = CatchAsyncError(async (req, res, next) => {
  // FIND CONTACTS COUNT
  const allContact = await CountDocument(ContactSchema);
  const processingContact = await CountDocument(ContactSchema, { status: "Processing" });
  const successContact = await CountDocument(ContactSchema, { status: "Success" });
  const deniedContact = await CountDocument(ContactSchema, { status: "Denied" });

  // SEND RESPONSE
  res.status(SUCCESS).json({
    SUCCESS: true,
    MESSAGE: SUCCESSFUL.GET.replace("${NAME}", "CONTACT COUNT"),
    DATA: {
      ALL_CONTACT: allContact,
      PROCESSING_CONTACT: processingContact,
      SUCCESS_CONTACT: successContact,
      DENIED_CONTACT: deniedContact
    },
  });
});