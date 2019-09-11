import { luckyTicketCounting } from '../../../main.js';
import { assert } from '../mainTest.js';

mocha.setup('bdd');

describe('Lucky tickets', () => {
    const context = {
        min: '326323',
        max: '641235',
    };

    const context1 = {
        min: '233456',
        max: '554321',
    };

    const context2 = {
        min: '000100',
        max: '500500',
    };

    const context3 = {
        min: '000000',
        max: '999999',
    };

    const context4 = {
        min: '123456',
        max: '654321',
    };

    it('Does the function return an object?', () => {
        assert.typeOf(luckyTicketCounting(context), 'object');
    });

    it('With values: min: 233456, max: 554321; result: easy: 19536, hard: 18528', () => {
        assert.deepEqual(luckyTicketCounting(context1), {
            easy: 19536,
            hard: 18528,
            winner: 'Winner: Easy way to count.',
        });
    });

    it('With values: min: 000100, max: 500500; result: easy: 19536, hard: 18528', () => {
        assert.deepEqual(luckyTicketCounting(context2), {
            easy: 27646,
            hard: 27652,
            winner: 'Winner: Hard way to count.',
        });
    });

    it('With values: min: 000000, max: 999999; result: easy: 55252, hard: 55252', () => {
        assert.deepEqual(luckyTicketCounting(context3), {
            easy: 55252,
            hard: 55252,
            winner: 'Winner: Hard way to count.',
        });
    });

    it('With values: min: 123456, max: 654321; result: easy: 31607, hard: 30213', () => {
        assert.deepEqual(luckyTicketCounting(context4), {
            easy: 31607,
            hard: 30213,
            winner: 'Winner: Easy way to count.',
        });
    });
});
