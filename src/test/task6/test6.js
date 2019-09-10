import { numericSequence } from '../../../main.js';
import { assert } from '../mainTest.js';

mocha.setup('bdd');

describe('Numeric sequence', function() {
    it('Does the function return a string?', function() {
        assert.typeOf(numericSequence(5, 36), 'string');
    });

    it('Provided: length: 5, min square of number 36, result: "6, 7, 8, 9, 10"', function() {
        assert.equal(numericSequence(5, 36), '6, 7, 8, 9, 10');
    });

    it('Provided: length: 3, min square of number 29, result: "6, 7, 8"', function() {
        assert.equal(numericSequence(3, 29), '6, 7, 8');
    });

    it('Provided: length: 1, min square of number 110, result: "11"', function() {
        assert.equal(numericSequence(1, 110), '11');
    });

    it('Provided: length: 1, min square of number 49, result: "7"', function() {
        assert.equal(numericSequence(1, 49), '7');
    });
});
