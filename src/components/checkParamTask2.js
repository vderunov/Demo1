import isNumeric from './isNumeric.js';

export function checkParameters(envelopeA, envelopeB) {
  if (!isNumeric(envelopeA.width)) {
    return {
      status: 'failed',
      reason: 'The wrong param width of the envelope-A. Enter the numbers',
    };
  }

  if (!isNumeric(envelopeA.height)) {
    return {
      status: 'failed',
      reason: 'The wrong param height of the envelope-A. Enter the numbers',
    };
  }

  if (!isNumeric(envelopeB.width)) {
    return {
      status: 'failed',
      reason: 'The wrong param width of the envelope-B. Enter the numbers',
    };
  }

  if (!isNumeric(envelopeB.height)) {
    return {
      status: 'failed',
      reason: 'The wrong param height of the envelope-B. Enter the numbers',
    };
  }

  if (
    envelopeA.width === envelopeA.height ||
    envelopeB.width === envelopeB.height
  ) {
    return {
      status: 'failed',
      reason: 'Width cannot match height',
    };
  }

  if (envelopeA.width <= 0 || envelopeA.width > 50) {
    return {
      status: 'failed',
      reason: 'Attention envelope A. Expected width between 1 - 50',
    };
  }

  if (envelopeA.height <= 0 || envelopeA.height > 50) {
    return {
      status: 'failed',
      reason: 'Attention envelope A. Expected height between 1 - 50',
    };
  }

  if (envelopeB.width <= 0 || envelopeB.width > 50) {
    return {
      status: 'failed',
      reason: 'Attention envelope B. Expected width between 1 - 50',
    };
  }

  if (envelopeB.height <= 0 || envelopeB.height > 50) {
    return {
      status: 'failed',
      reason: 'Attention envelope B. Expected height between 1 - 50',
    };
  }

  return false;
}

export default checkParameters;
