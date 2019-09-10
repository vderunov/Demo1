'use strict';

import { isNumeric } from './isNumeric.js';

export function checkParameters(initialObject) {
    let maxLengthProp = 6;

    if (!initialObject) {
        return {
            status: 'failed',
            reason: 'The parameter is empty. Enter a valid parameter represented by an object with the min and max',
        };
    }

    if (initialObject.min.length > maxLengthProp || initialObject.max.length > maxLengthProp) {
        return {
            status: 'failed',
            reason: 'The maximum allowable value of the min and max properties is 999999',
        };
    }

    for (let key in initialObject) {
        let value = initialObject[key];
        for (let char of value) {
            if (!isNumeric(char)) {
                return {
                    status: 'failed',
                    reason: 'Properties entered incorrectly. The min and max properties must contain only numbers',
                };
            }
        }
    }

    if (initialObject.min > initialObject.max) {
        return {
            status: 'failed',
            reason: 'The min property must not be greater than the max property',
        };
    }
}
