'use strict';

import { isNumeric } from './isNumeric.js';

export function checkParameters(initialNumber) {
    let initialStr = String(initialNumber),
        minLengthParam = 2;

    if (!initialNumber) {
        return { status: 'failed', reason: 'Parameters are missing. Enter valid parameters.' };
    }

    if (!isNumeric(initialNumber)) {
        return { status: 'failed', reason: 'The parameter is not entered correctly. Expected number.' };
    }

    if (initialStr.length < minLengthParam) {
        return { status: 'failed', reason: 'The parameter must be greater than 10' };
    }

    for (let char of initialStr) {
        if (isNaN(char)) {
            return { status: 'failed', reason: 'Enter a positive number' };
        }
    }
}
