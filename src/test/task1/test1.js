import { showChessBoard } from '../../../main.js';
import { assert } from '../mainTest.js';

mocha.setup('bdd');

describe('Show Chessboard', () => {
    it('Does the function return a string?', () => {
        assert.typeOf(showChessBoard(8, 8, '*'), 'string');
    });
});
