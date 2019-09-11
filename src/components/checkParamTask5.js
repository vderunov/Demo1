import { isNumeric } from './isNumeric.js';

export function checkParameters(initialObject) {
    const maxLengthProp = 6;

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

    for (const key in initialObject) {
        if ({}.hasOwnProperty.call(initialObject, key)) {
            const value = initialObject[key];
            for (const char of value) {
                if (!isNumeric(char)) {
                    return {
                        status: 'failed',
                        reason: 'Properties entered incorrectly. The min and max properties must contain only numbers',
                    };
                }
            }
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
