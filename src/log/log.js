const moment = require("moment")

/**
 * Print
 * @param {String} consoleMethod Console method [log, warn, error]
 * @param {String} type Message type [INFO, ERROR, WARN]
 * @param {String} header Service name
 * @param {String} message Message
 * @param  {...any} args Trace error
 */
function print(consoleMethod, type, header, message, ...args) {
  const date = moment().format("YYYY-MM-DD HH:mm:ss");

  if (args.length > 0) {
    message += ", ";
  }

  console[consoleMethod](
    `[${header.toUpperCase()}] ${date} ${type} ${message}`,
    ...args
  );
}

module.exports = {
  info: (header, message) => print("log", "INFO", header, message),
  error: (header, message, ...trace) =>
    print("error", "ERROR", header, message, ...trace),
  warn: (header, message) => print("warn", "WARN", header, message),
};
