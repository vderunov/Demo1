'use strict';

import { isNumeric } from './isNumeric.js';

export function checkParameters(initialObject) {
    let maxLength = 1000000;

    if (!initialObject) {
        return {
            status: 'failed',
            reason: 'The parameters are empty. Enter a valid parameters',
        };
    }

    if (initialObject.hasOwnProperty('length')) {
        if (!isNumeric(initialObject.length)) {
            return {
                status: 'failed',
                reason: 'Error entering parameters. Parameters must be numbers',
            };
        }

        if (initialObject.length < 0) {
            return {
                status: 'failed',
                reason: 'Parameter cannot be negative',
            };
        }

        if (initialObject.length > maxLength) {
            return {
                status: 'failed',
                reason: 'Maximum length: 1.000.000',
            };
        }
    } else {
        if (!isNumeric(initialObject.min) || !isNumeric(initialObject.max)) {
            return {
                status: 'failed',
                reason: 'Error entering parameters. Parameters must be numbers',
            };
        }

        if (+initialObject.min > +initialObject.max) {
            return {
                status: 'failed',
                reason: 'Min parameter cannot be greater than max parameter',
            };
        }

        if (initialObject.min < 0) {
            return {
                status: 'failed',
                reason: 'Parameter cannot be negative',
            };
        }
    }
}
