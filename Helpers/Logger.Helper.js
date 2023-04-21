// IMPORT REQUIRED PACKAGES
const { Winston } = require("../Configs/Packages.Import");

// FORMAT ERROR
const EnumerateErrorFormat = Winston.format((Information) => {
  if (Information instanceof Error) {
    Object.assign(Information, { message: Information.stack });
  }
  return Information;
});

// LOGGER
const Logger = Winston.createLogger({
  level: "debug",
  format: Winston.format.combine(
    EnumerateErrorFormat(),
    Winston.format.colorize(),
    Winston.format.splat(),
    Winston.format.printf(({ Level, Message }) => `${Level}: ${Message}`)
  ),
  transports: [
    new Winston.transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});

// EXPORT
module.exports = Logger;
