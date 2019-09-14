import numericSequence from '../../task6.js';
import checkParamTask6 from '../../components/checkParamTask6.js';

const test6 = function makeTestsForTask6(assert) {
  describe('Numeric sequence', () => {
    it('Does the function return a string?', () => {
      assert.typeOf(numericSequence(5, 36), 'string');
    });

    const valid = [{
      description: 'Provided: length: 5, min square of number 36, result: "6, 7, 8, 9, 10"',
      arguments: [5, 36],
      result: '6, 7, 8, 9, 10',
    },
    {
      description: 'Provided: length: 3, min square of number 29, result: "6, 7, 8"',
      arguments: [3, 29],
      result: '6, 7, 8',
    },
    {
      description: 'Provided: length: 1, min square of number 110, result: "11"',
      arguments: [1, 110],
      result: '11',
    },
    {
      description: 'Provided: length: 1, min square of number 49, result: "7"',
      arguments: [1, 49],
      result: '7',
    },
    ];

    valid.forEach((el) => {
      it(el.description, () => {
        assert.equal(
          numericSequence(...el.arguments),
          el.result,
        );
      });
    });

    describe('Error conditions', () => {
      const error = [
        {
          description: 'Parameters must be numbers: ()',
          arguments: [],
          result: {
            status: 'failed',
            reason: 'The parameters are empty. Enter a valid parameters',
          },
        },
        {
          description: 'Parameters must be numbers: (6, t)',
          arguments: ['6', 't'],
          result: {
            status: 'failed',
            reason: 'Error entering parameters. Parameters must be numbers',
          },
        },
        {
          description: 'Parameters must be numbers: (Y, 6)',
          arguments: ['Y', '6'],
          result: {
            status: 'failed',
            reason: 'Error entering parameters. Parameters must be numbers',
          },
        },
        {
          description: 'Missing first parameter: length: ( , 6)',
          arguments: ['', '6'],
          result: {
            status: 'failed',
            reason: 'Error entering parameters. Missing first parameter: length',
          },
        },
        {
          description: 'Missing first parameter: min exponent: (6, )',
          arguments: ['6', ''],
          result: {
            status: 'failed',
            reason: 'Error entering parameters. Missing second parameter: min exponent',
          },
        },
        {
          description: 'Min square value: max 1000000: (6, 11000000)',
          arguments: ['6', '11000000'],
          result: {
            status: 'failed',
            reason: 'Min square value: max 1000000',
          },
        },
        {
          description: 'Max length 500: (501, 555555)',
          arguments: ['501', '555555'],
          result: {
            status: 'failed',
            reason: 'Error entering parameters. Maximum length 500',
          },
        },
        {
          description: 'Negative parameters: (-1, 555555)',
          arguments: ['-1', '555555'],
          result: {
            status: 'failed',
            reason: 'Error entering parameters. Parameters must be positive',
          },
        },
      ];

      error.forEach((el) => {
        it(el.description, () => {
          assert.deepEqual(
            checkParamTask6(...el.arguments),
            el.result,
          );
        });
      });
    });
  });
};

export default test6;
