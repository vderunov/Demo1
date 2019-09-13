import isNumeric from './isNumeric.js';

export function checkParameters(initialObject) {
  const maxLength = 1000;

  if ({}.hasOwnProperty.call(initialObject, 'length')) {
    if (!initialObject.length) {
      return {
        status: 'failed',
        reason: 'The parameters are empty. Enter a valid parameters',
      };
    }

    if (!isNumeric(initialObject.length)) {
      return {
        status: 'failed',
        reason: 'Error entering parameters. Parameters must be numbers',
      };
    }

    if (initialObject.length < 0) {
      return {
        status: 'failed',
        reason: 'Parameter cannot be negative',
      };
    }

    if (initialObject.length > maxLength) {
      return {
        status: 'failed',
        reason: 'Maximum length: 1000',
      };
    }
  } else {
    if (!initialObject.min || !initialObject.max) {
      return {
        status: 'failed',
        reason: 'The parameters are empty. Enter a valid parameters',
      };
    }

    if (!isNumeric(initialObject.min) || !isNumeric(initialObject.max)) {
      return {
        status: 'failed',
        reason: 'Error entering parameters. Parameters must be numbers',
      };
    }

    if (initialObject.min > initialObject.max) {
      return {
        status: 'failed',
        reason: 'Min parameter cannot be greater than max parameter',
      };
    }

    if (initialObject.min < 0) {
      return {
        status: 'failed',
        reason: 'Parameter cannot be negative',
      };
    }
  }
  return false;
}

export default checkParameters;
