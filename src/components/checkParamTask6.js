import isNumeric from './isNumeric.js';

export function checkParameters(rowLength, minAmountExponent) {
  const maxLength = 500;
  const maxExponentValue = 1000000;

  if (!rowLength && !minAmountExponent) {
    return {
      status: 'failed',
      reason: 'The parameters are empty. Enter a valid parameters',
    };
  }

  if (!rowLength) {
    return {
      status: 'failed',
      reason: 'Error entering parameters. Missing first parameter: length',
    };
  }

  if (!minAmountExponent) {
    return {
      status: 'failed',
      reason: 'Error entering parameters. Missing second parameter: min exponent',
    };
  }

  if (minAmountExponent > maxExponentValue) {
    return {
      status: 'failed',
      reason: 'Min square value: max 1000000',
    };
  }

  if (!isNumeric(rowLength) || !isNumeric(minAmountExponent)) {
    return {
      status: 'failed',
      reason: 'Error entering parameters. Parameters must be numbers',
    };
  }

  if (rowLength > maxLength) {
    return {
      status: 'failed',
      reason: 'Error entering parameters. Maximum length 500',
    };
  }

  if (rowLength < 0 || minAmountExponent < 0) {
    return {
      status: 'failed',
      reason: 'Error entering parameters. Parameters must be positive',
    };
  }

  return false;
}

export default checkParameters;
