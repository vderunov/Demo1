import { checkParameters } from './components/checkParamTask1.js';

export function showChessBoard(length, width, symbol) {
    const light = ` ${symbol}`;
    const dark = `${symbol} `;

    const parameterError = checkParameters(length, width, symbol);

    if (parameterError) {
        return parameterError;
    }

    return `${light.repeat(length / 2)}\n${dark.repeat(width / 2)}\n`.repeat(width / 2);
}

export default showChessBoard;

// console.log(showChessBoard(8, 8, '*'));
