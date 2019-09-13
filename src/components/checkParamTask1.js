import isNumeric from './isNumeric.js';

export function checkParameters(length, width, symbol) {
  const maxBoardSize = 50;
  const maxSymbolLength = 1;
  const zero = '0';

  if (length < 0 || width < 0) {
    return {
      status: 'failed',
      reason: 'Length and width cannot be negative',
    };
  }

  if (length === zero || width === zero) {
    return {
      status: 'failed',
      reason: 'Length and width cannot be 0',
    };
  }

  if (symbol === ' ') {
    return { status: 'failed', reason: 'The symbol cannot be an empty string' };
  }

  if (!length || !width || !symbol) {
    return {
      status: 'failed',
      reason: 'Not enough parameters. Expected parameters: 1. Number, 2. Number, 3. String',
    };
  }

  if (length !== width && (!Number.isNaN(+length) && !Number.isNaN(+width))) {
    return {
      status: 'failed',
      reason: 'Width and length must be equal',
    };
  }

  if (!isNumeric(length) || !isNumeric(width)) {
    return { status: 'failed', reason: 'The first and second parameters must be numbers' };
  }

  if (length > maxBoardSize || width > maxBoardSize) {
    return {
      status: 'failed',
      reason: 'Maximum board size 50 x 50',
    };
  }

  if (symbol.length > maxSymbolLength) {
    return {
      status: 'failed',
      reason: 'Expected only one character (example: "*")',
    };
  }

  if (length % 2 !== 0) {
    return {
      status: 'failed',
      reason: 'Length and width must be even: (3, 3, *)',
    };
  }
  return false;
}

export default checkParameters;
