import { getPalindrome } from '../../../main.js';
import { assert } from '../mainTest.js';

mocha.setup('bdd');

describe('Palindrome', function() {
    it('Does the function return a number?', function() {
        assert.typeOf(getPalindrome(1234437), 'number');
    });

    it('A palindrome from number 1234437, is it 3443?', function() {
        assert.equal(getPalindrome(1234437), 3443);
    });

    it('A palindrome from number 12344371, is it 3443?', function() {
        assert.equal(getPalindrome(12344371), 3443);
    });

    it('A palindrome from number 3443, is it 3443?', function() {
        assert.equal(getPalindrome(3443), 3443);
    });

    it('A palindrome from number 200212344371, is it 3443?', function() {
        assert.equal(getPalindrome(200212344371), 3443);
    });

    it('A palindrome from number 123456789, is it 0?', function() {
        assert.equal(getPalindrome(123456789), 0);
    });

    it('A palindrome from number 645345543900, is it 345543?', function() {
        assert.equal(getPalindrome(645345543900), 345543);
    });
});
