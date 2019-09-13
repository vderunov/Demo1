import numericSequence from '../../task6.js';
import checkParamTask6 from '../../components/checkParamTask6.js';

const test6 = function makeTestsForTask6(assert) {
  describe('Numeric sequence', () => {
    it('Does the function return a string?', () => {
      assert.typeOf(numericSequence(5, 36), 'string');
    });

    it('Provided: length: 5, min square of number 36, result: "6, 7, 8, 9, 10"', () => {
      assert.equal(numericSequence(5, 36), '6, 7, 8, 9, 10');
    });

    it('Provided: length: 3, min square of number 29, result: "6, 7, 8"', () => {
      assert.equal(numericSequence(3, 29), '6, 7, 8');
    });

    it('Provided: length: 1, min square of number 110, result: "11"', () => {
      assert.equal(numericSequence(1, 110), '11');
    });

    it('Provided: length: 1, min square of number 49, result: "7"', () => {
      assert.equal(numericSequence(1, 49), '7');
    });

    describe('Error conditions', () => {
      it('Parameters must be numbers: ()', () => {
        assert.deepEqual(checkParamTask6(), {
          status: 'failed',
          reason: 'The parameters are empty. Enter a valid parameters',
        });
      });

      it('Parameters must be numbers: (6, t)', () => {
        assert.deepEqual(checkParamTask6('6', 't'), {
          status: 'failed',
          reason: 'Error entering parameters. Parameters must be numbers',
        });
      });

      it('Parameters must be numbers: (Y, 6)', () => {
        assert.deepEqual(checkParamTask6('Y', '6'), {
          status: 'failed',
          reason: 'Error entering parameters. Parameters must be numbers',
        });
      });

      it('Missing first parameter: length: ( , 6)', () => {
        assert.deepEqual(checkParamTask6('', '6'), {
          status: 'failed',
          reason: 'Error entering parameters. Missing first parameter: length',
        });
      });

      it('Missing first parameter: min exponent: (6, )', () => {
        assert.deepEqual(checkParamTask6('6', ''), {
          status: 'failed',
          reason: 'Error entering parameters. Missing second parameter: min exponent',
        });
      });

      it('Min square value: max 1000000: (6, 11000000)', () => {
        assert.deepEqual(checkParamTask6('6', '11000000'), {
          status: 'failed',
          reason: 'Min square value: max 1000000',
        });
      });

      it('Max length 500: (501, 555555)', () => {
        assert.deepEqual(checkParamTask6('501', '555555'), {
          status: 'failed',
          reason: 'Error entering parameters. Maximum length 500',
        });
      });

      it('Negative parameters: (-1, 555555)', () => {
        assert.deepEqual(checkParamTask6('-1', '555555'), {
          status: 'failed',
          reason: 'Error entering parameters. Parameters must be positive',
        });
      });
    });
  });
};

export default test6;
