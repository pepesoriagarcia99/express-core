/**
 * Developer Error
 *
 * @class DeveloperError
 * @public
 *
 * @constructor
 */
class DeveloperError extends Error {

  name;

  message;

  date;

  /**
    * Construct Express instance
    * @param {String} message My error message
    * @param {Array} params Bug stack
  */
  constructor(message = '', ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DeveloperError);
    }

    this.name = 'Error';
    this.message = message;
    this.date = new Date();
  }
}

module.exports = DeveloperError;
