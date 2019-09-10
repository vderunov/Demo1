'use strict';

import { checkParameters } from './components/checkParamTask1.js';

export function showChessBoard(length, width, symbol) {
    let parameterError,
        field = '',
        i = 0,
        j = 0;

    parameterError = checkParameters(length, width, symbol);

    if (parameterError) {
        return parameterError;
    }

    for (i = 0; i < length; i++) {
        for (j = 0; j < width; j++) {
            (i + j) % 2 ? (field += symbol) : (field += ' ');
        }
        field += '\n';
    }
    return field;
}

// console.log(showChessBoard(8, 8, '*'));
