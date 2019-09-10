'use strict';

import { checkParameters } from './components/checkParamTask6.js';

export function numericSequence(rowLength, minAmountExponent) {
    let arrNumbers = [],
        parameterError,
        result,
        base,
        i = 0;

    parameterError = checkParameters(rowLength, minAmountExponent);

    if (parameterError) {
        return parameterError;
    }

    do {
        base = Math.pow(i, 2);

        if (base >= minAmountExponent) {
            arrNumbers.push(i);
        }

        i++;
    } while (arrNumbers.length < rowLength);

    result = arrNumbers.join(', ');

    return result;
}

// console.log(numericSequence(5, 36));
