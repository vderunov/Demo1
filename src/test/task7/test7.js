import { getFibonacci, getFibonacciSeries, getFibonacciMinMax } from '../../task7.js';
import checkParamTask7 from '../../components/checkParamTask7.js';

const test7 = function makeTestsForTask7(assert) {
  describe('Fibonacci numbers', () => {
    it('Does the function return an array?', () => {
      assert.typeOf(getFibonacci({
        length: 8,
      }), 'array');
    });

    describe('Fibonacci numbers series', () => {
      it('With a length of 8, the result: [0, 1, 1, 2, 3, 5, 8, 13]', () => {
        assert.deepEqual(getFibonacciSeries({
          length: 8,
        }), [0, 1, 1, 2, 3, 5, 8, 13]);
      });

      it('With a length of 4, the result: [0, 1, 1, 2]', () => {
        assert.deepEqual(getFibonacciSeries({
          length: 4,
        }), [0, 1, 1, 2]);
      });

      it('With a length of 1, the result: [0]', () => {
        assert.deepEqual(getFibonacciSeries({
          length: 1,
        }), [0]);
      });

      it('With a length of 0, the result: []', () => {
        assert.deepEqual(getFibonacciSeries({
          length: 0,
        }), []);
      });
    });

    describe('Fibonacci numbers range', () => {
      it('Range: min: 2, max: 21 the result: [2, 3, 5, 8, 13, 21]', () => {
        assert.deepEqual(getFibonacciMinMax({
          min: 2,
          max: 21,
        }), [2, 3, 5, 8, 13, 21]);
      });

      it('Range: min: 8, max: 34 the result: [8, 13, 21, 34]', () => {
        assert.deepEqual(getFibonacciMinMax({
          min: 8,
          max: 34,
        }), [8, 13, 21, 34]);
      });

      it('Range: min: 1, max: 1 the result: [1, 1]', () => {
        assert.deepEqual(getFibonacciMinMax({
          min: 1,
          max: 1,
        }), [1, 1]);
      });

      it('Range: min: 0, max: 0 the result: []', () => {
        assert.deepEqual(getFibonacciMinMax({
          min: 0,
          max: 0,
        }), []);
      });
    });

    describe('Error conditions', () => {
      it('The parameters are empty.: (length: )', () => {
        assert.deepEqual(checkParamTask7(''), {
          status: 'failed',
          reason: 'The parameters are empty. Enter a valid parameters',
        });
      });

      it('The parameters are empty: (min: , max: )', () => {
        assert.deepEqual(checkParamTask7(''), {
          status: 'failed',
          reason: 'The parameters are empty. Enter a valid parameters',
        });
      });

      it('Parameters must be numbers: ({ length: g })', () => {
        assert.deepEqual(checkParamTask7({ length: 'g' }), {
          status: 'failed',
          reason: 'Error entering parameters. Parameters must be numbers',
        });
      });

      it('Parameter cannot be negative: ({ length: -1 })', () => {
        assert.deepEqual(checkParamTask7({ length: -1 }), {
          status: 'failed',
          reason: 'Parameter cannot be negative',
        });
      });

      it('Maximum length: 1000: ({ length: 10000 })', () => {
        assert.deepEqual(checkParamTask7({ length: 10000 }), {
          status: 'failed',
          reason: 'Maximum length: 1000',
        });
      });

      it('Parameters must be numbers: ({ min: a, max: 10 })', () => {
        assert.deepEqual(checkParamTask7({ min: 'a', max: 10 }), {
          status: 'failed',
          reason: 'Error entering parameters. Parameters must be numbers',
        });
      });

      it('Parameters must be numbers: ({ min: 10, max: a })', () => {
        assert.deepEqual(checkParamTask7({ min: 10, max: 'a' }), {
          status: 'failed',
          reason: 'Error entering parameters. Parameters must be numbers',
        });
      });

      it('Min parameter cannot be greater than max parameter: ({ min: 10, max: 9 })', () => {
        assert.deepEqual(checkParamTask7({ min: 10, max: 9 }), {
          status: 'failed',
          reason: 'Min parameter cannot be greater than max parameter',
        });
      });

      it('Parameter cannot be negative: ({ min: -1, max: 10 })', () => {
        assert.deepEqual(checkParamTask7({ min: -1, max: 10 }), {
          status: 'failed',
          reason: 'Parameter cannot be negative',
        });
      });
    });
  });
};

export default test7;
