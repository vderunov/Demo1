'use strict';

import { isNumeric } from './isNumeric.js';

export function checkParameters(length, width, symbol) {
    const maxBoardSize = 8,
        maxSymbolLength = 1;

    if (length < 0 || width < 0) {
        return {
            status: 'failed',
            reason: 'Length and width cannot be negative',
        };
    }

    if (length === 0 || width === 0) {
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

    if (!isNumeric(length) || !isNumeric(width)) {
        return { status: 'failed', reason: 'The first and second parameters must be numbers' };
    }

    if (!symbol) {
        return { status: 'failed', reason: 'The third parameter cannot be an empty string, enter any character' };
    }

    if (length > maxBoardSize || width > maxBoardSize) {
        return {
            status: 'failed',
            reason: 'Maximum board size 8 x 8',
        };
    }

    if (symbol.length > maxSymbolLength) {
        return {
            status: 'failed',
            reason: 'Enter only one character (example: "*")',
        };
    }
}
