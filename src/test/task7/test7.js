import {
  getFibonacci,
  getFibonacciSeries,
  getFibonacciMinMax,
} from '../../task7.js';
import checkParamTask7 from '../../components/checkParamTask7.js';

const test7 = function makeTestsForTask7(assert) {
  describe('Fibonacci numbers', () => {
    it('Does the function return an array?', () => {
      assert.typeOf(
        getFibonacci({
          length: 8,
        }),
        'array',
      );
    });

    describe('Fibonacci numbers series', () => {
      const valid = [
        {
          description:
            'With a length of 8, the result: [0, 1, 1, 2, 3, 5, 8, 13]',
          arguments: [
            {
              length: 8,
            },
          ],
          result: [0, 1, 1, 2, 3, 5, 8, 13],
        },
        {
          description: 'With a length of 4, the result: [0, 1, 1, 2]',
          arguments: [
            {
              length: 4,
            },
          ],
          result: [0, 1, 1, 2],
        },
        {
          description: 'With a length of 1, the result: [0]',
          arguments: [
            {
              length: 1,
            },
          ],
          result: [0],
        },
        {
          description: 'With a length of 0, the result: []',
          arguments: [
            {
              length: 0,
            },
          ],
          result: [],
        },
      ];

      valid.forEach(el => {
        it(el.description, () => {
          assert.deepEqual(getFibonacciSeries(...el.arguments), el.result);
        });
      });
    });

    describe('Fibonacci numbers range', () => {
      const valid = [
        {
          description:
            'Range: min: 2, max: 21 the result: [2, 3, 5, 8, 13, 21]',
          arguments: [
            {
              min: 2,
              max: 21,
            },
          ],
          result: [2, 3, 5, 8, 13, 21],
        },
        {
          description: 'Range: min: 8, max: 34 the result: [8, 13, 21, 34]',
          arguments: [
            {
              min: 8,
              max: 34,
            },
          ],
          result: [8, 13, 21, 34],
        },
        {
          description: 'Range: min: 8, max: 34 the result: [8, 13, 21, 34]',
          arguments: [
            {
              min: 1,
              max: 1,
            },
          ],
          result: [1, 1],
        },
        {
          description: 'Range: min: 0, max: 0 the result: []',
          arguments: [
            {
              min: 0,
              max: 0,
            },
          ],
          result: [],
        },
      ];

      valid.forEach(el => {
        it(el.description, () => {
          assert.deepEqual(getFibonacciMinMax(...el.arguments), el.result);
        });
      });
    });

    describe('Error conditions', () => {
      const error = [
        {
          description: 'The parameters are empty.: (length: )',
          arguments: [''],
          result: {
            status: 'failed',
            reason: 'The parameters are empty. Enter a valid parameters',
          },
        },
        {
          description: 'The parameters are empty: (min: , max: )',
          arguments: [''],
          result: {
            status: 'failed',
            reason: 'The parameters are empty. Enter a valid parameters',
          },
        },
        {
          description: 'Parameters must be numbers: ({ length: g })',
          arguments: [{ length: 'g' }],
          result: {
            status: 'failed',
            reason: 'Error entering parameters. Parameters must be numbers',
          },
        },
        {
          description: 'Parameter cannot be negative: ({ length: -1 })',
          arguments: [{ length: -1 }],
          result: {
            status: 'failed',
            reason: 'Parameter cannot be negative',
          },
        },
        {
          description: 'Maximum length: 1000: ({ length: 10000 })',
          arguments: [{ length: 10000 }],
          result: {
            status: 'failed',
            reason: 'Maximum length: 1000',
          },
        },
        {
          description: 'Parameters must be numbers: ({ min: a, max: 10 })',
          arguments: [{ min: 'a', max: 10 }],
          result: {
            status: 'failed',
            reason: 'Error entering parameters. Parameters must be numbers',
          },
        },
        {
          description: 'Parameters must be numbers: ({ min: 10, max: a })',
          arguments: [{ min: 10, max: 'a' }],
          result: {
            status: 'failed',
            reason: 'Error entering parameters. Parameters must be numbers',
          },
        },
        {
          description:
            'Min parameter cannot be greater than max parameter: ({ min: 10, max: 9 })',
          arguments: [{ min: 10, max: 9 }],
          result: {
            status: 'failed',
            reason: 'Min parameter cannot be greater than max parameter',
          },
        },
        {
          description: 'Parameter cannot be negative: ({ min: -1, max: 10 })',
          arguments: [{ min: -1, max: 10 }],
          result: {
            status: 'failed',
            reason: 'Parameter cannot be negative',
          },
        },
      ];

      error.forEach(el => {
        it(el.description, () => {
          assert.deepEqual(checkParamTask7(...el.arguments), el.result);
        });
      });
    });
  });
};

export default test7;
