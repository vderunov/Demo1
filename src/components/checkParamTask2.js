import { isNumeric } from './isNumeric.js';

export function checkParameters(envelopeA, envelopeB) {
  if (!envelopeA || !envelopeB) {
    return {
      status: 'failed',
      reason: 'The parameters are empty. Enter a valid parameters',
    };
  }
  return false;
}

export default checkParameters;
