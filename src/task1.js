import { checkParameters } from './components/checkParamTask1.js';

document.querySelector('.chessBtn').addEventListener('click', getValue);

export function showChessBoard(length, width, symbol) {
    const rootChess = document.querySelector('.root-chess');

    const parameterError = checkParameters(length, width, symbol);

    if (parameterError) {
        return parameterError;
    }

    if (rootChess.children[0]) {
        rootChess.children[0].remove();
    }

    const light = ` ${symbol}`;
    const dark = `${symbol} `;

    const pre = document.createElement('pre');
    pre.innerHTML = `${light.repeat(length / 2)}\n${dark.repeat(width / 2)}\n`.repeat(width / 2);
    rootChess.append(pre);

    document.querySelector('#length').value = '';
    document.querySelector('#width').value = '';
    document.querySelector('#symbol').value = '';

    return pre.innerHTML;
}

function getValue() {
    const length = document.querySelector('#length').value;
    const width = document.querySelector('#width').value;
    const symbol = document.querySelector('#symbol').value;

    showChessBoard(length, width, symbol);
}

export default showChessBoard;
