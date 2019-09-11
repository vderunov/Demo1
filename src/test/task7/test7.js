import { fibonacci, getFibonacciSeries, getFibonacciMinMax } from '../../../main.js';
import { assert } from '../mainTest.js';

mocha.setup('bdd');

describe('Fibonacci numbers', () => {
    const context = {
        length: 8,
    };

    it('Does the function return an array?', () => {
        assert.typeOf(fibonacci(context), 'array');
    });

    describe('Fibonacci numbers series', () => {
        const contextA = {
            length: 8,
        };

        const contextB = {
            length: 4,
        };

        const contextC = {
            length: 1,
        };

        const contextD = {
            length: 0,
        };

        it('With a length of 8, the result: [0, 1, 1, 2, 3, 5, 8, 13]', () => {
            assert.deepEqual(getFibonacciSeries(contextA), [0, 1, 1, 2, 3, 5, 8, 13]);
        });

        it('With a length of 4, the result: [0, 1, 1, 2]', () => {
            assert.deepEqual(getFibonacciSeries(contextB), [0, 1, 1, 2]);
        });

        it('With a length of 1, the result: [0]', () => {
            assert.deepEqual(getFibonacciSeries(contextC), [0]);
        });

        it('With a length of 0, the result: []', () => {
            assert.deepEqual(getFibonacciSeries(contextD), []);
        });
    });

    describe('Fibonacci numbers range', () => {
        const contextA = {
            min: 2,
            max: 21,
        };

        const contextB = {
            min: 8,
            max: 34,
        };

        const contextC = {
            min: 1,
            max: 1,
        };

        const contextD = {
            min: 0,
            max: 0,
        };

        it('Range: min: 2, max: 21 the result: [2, 3, 5, 8, 13, 21]', () => {
            assert.deepEqual(getFibonacciMinMax(contextA), [2, 3, 5, 8, 13, 21]);
        });

        it('Range: min: 8, max: 34 the result: [8, 13, 21, 34]', () => {
            assert.deepEqual(getFibonacciMinMax(contextB), [8, 13, 21, 34]);
        });

        it('Range: min: 1, max: 1 the result: [1, 1]', () => {
            assert.deepEqual(getFibonacciMinMax(contextC), [1, 1]);
        });

        it('Range: min: 0, max: 0 the result: []', () => {
            assert.deepEqual(getFibonacciMinMax(contextD), []);
        });
    });
});
