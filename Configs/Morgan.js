// IMPORT REQUIRED PACKAGES
const { Morgan } = require("./Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const { Logger } = require("../Helpers/Logger.Helper");

Morgan.token("message", (req, res) => res.locals.errorMessage || "");

// MESSAGES
const getIpFormat = () => "";
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

// SUCCESS HANDLER
const SuccessHandler = Morgan(successResponseFormat, {
  skip: (req, res) => res.statusCode >= 400,
  stream: { write: (message) => Logger.info(message.trim()) },
});

// ERROR HANDLER
const ErrorHandler = Morgan(errorResponseFormat, {
  skip: (req, res) => res.statusCode < 400,
  stream: { write: (message) => Logger.error(message.trim()) },
});

// EXPORT
module.exports = {
  SuccessHandler,
  ErrorHandler,
};
