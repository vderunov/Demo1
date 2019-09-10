import { showChessBoard } from '../../../main.js';
import { assert } from '../mainTest.js';

mocha.setup('bdd');

describe('Show Chessboard', function() {
    it('Does the function return a string?', function() {
        assert.typeOf(showChessBoard(8, 8, '*'), 'string');
    });
});
