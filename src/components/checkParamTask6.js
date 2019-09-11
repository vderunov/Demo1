import { isNumeric } from './isNumeric.js';

export function checkParameters(rowLength, minAmountExponent) {
    const maxLength = 1000000;

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

    if (!isNumeric(rowLength) || !isNumeric(minAmountExponent)) {
        return {
            status: 'failed',
            reason: 'Error entering parameters. Parameters must be numbers',
        };
    }

    if (rowLength > maxLength) {
        return {
            status: 'failed',
            reason: 'Error entering parameters. Maximum length 1,000,000',
        };
    }
    return false;
}

export default checkParameters;
