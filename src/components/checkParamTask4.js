import isNumeric from '../aux/isNumeric.js';

export default function checkParameters(initialNumber) {
  const minLengthParam = 2;
  const maxLengthParam = 100;

  if (!initialNumber) {
    return {
      status: 'failed',
      reason: 'Parameters are missing. Enter valid parameters',
    };
  }

  if (initialNumber < 0) {
    return { status: 'failed', reason: 'Enter a positive number' };
  }

  for (let i = 0; i < initialNumber.length; i += 1) {
    if (Number.isNaN(Number(initialNumber[i]))) {
      return { status: 'failed', reason: 'Enter only numbers' };
    }
  }

  if (!isNumeric(initialNumber)) {
    return {
      status: 'failed',
      reason: 'The parameter is not entered correctly. Expected number',
    };
  }

  if (initialNumber.length < minLengthParam) {
    return {
      status: 'failed',
      reason: 'The parameter must be greater than 10',
    };
  }

  if (initialNumber.length > maxLengthParam) {
    return {
      status: 'failed',
      reason: 'The parameter must be less than 100 symbols',
    };
  }

  return false;
}
