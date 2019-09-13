import isNumeric from './isNumeric.js';

export function checkParameters(initialObject) {
  const maxLengthProp = 6;

  if (!initialObject) {
    return {
      status: 'failed',
      reason: 'The parameter is empty. Enter a valid parameter',
    };
  }

  if (initialObject.min === '' || initialObject.max === '') {
    return {
      status: 'failed',
      reason: 'Empty parameters: enter parameters min and max',
    };
  }

  if (initialObject.min.length > maxLengthProp || initialObject.max.length > maxLengthProp) {
    return {
      status: 'failed',
      reason: 'The maximum allowable value of the min and max properties is 999999',
    };
  }

  for (let i = 0; i < initialObject.min.length; i++) {
    if (!isNumeric(initialObject.min[i])) {
      return {
        status: 'failed',
        reason: 'Only numbers expected',
      };
    }
  }

  for (let i = 0; i < initialObject.max.length; i++) {
    if (!isNumeric(initialObject.min[i])) {
      return {
        status: 'failed',
        reason: 'Only numbers expected',
      };
    }
  }

  if (initialObject.min > initialObject.max) {
    return {
      status: 'failed',
      reason: 'The min property must not be greater than the max property',
    };
  }

  return false;
}

export default checkParameters;
