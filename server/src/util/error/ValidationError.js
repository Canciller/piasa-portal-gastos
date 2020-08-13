import APIError from './APIError';

/**
 * Class representing a Validation Error.
 * @extends APIError
 */
class ValidationError extends APIError {
  /**
   * Creates a Validation Error.
   * @param {string} message
   */
  constructor(message = 'Validation error') {
    super(message);
  }
}

export default ValidationError;
