import getPalindrome from '../../task4.js';
import checkParamTask4 from '../../components/checkParamTask4.js';

const test4 = function makeTestsForTask4(assert) {
  describe('Palindrome', () => {
    it('Does the function return a number?', () => {
      assert.typeOf(getPalindrome('1234437'), 'number');
    });

    const valid = [
      {
        description: 'A palindrome from number 1234437, is it 3443?',
        arguments: ['1234437'],
        result: 3443,
      },
      {
        description: 'A palindrome from number 12344371, is it 3443?',
        arguments: ['12344371'],
        result: 3443,
      },
      {
        description: 'A palindrome from number 3443, is it 3443?',
        arguments: ['3443'],
        result: 3443,
      },
      {
        description: 'A palindrome from number 200212344371, is it 3443?',
        arguments: ['200212344371'],
        result: 3443,
      },
      {
        description: 'A palindrome from number 123456789, is it 0?',
        arguments: ['123456789'],
        result: 0,
      },
      {
        description: 'A palindrome from number 645345543900, is it 345543?',
        arguments: ['645345543900'],
        result: 345543,
      },
    ];

    valid.forEach((el) => {
      it(el.description, () => {
        assert.equal(
          getPalindrome(...el.arguments),
          el.result,
        );
      });
    });

    describe('Error conditions', () => {
      const error = [
        {
          description: 'Empty parameters: Parameters are missing. Enter valid parameters',
          arguments: [],
          result: {
            status: 'failed',
            reason: 'Parameters are missing. Enter valid parameters',
          },
        },
        {
          description: 'Literal parametrs: (asd) => The parameter is not entered correctly. Expected number',
          arguments: ['asd'],
          result: {
            status: 'failed',
            reason: 'The parameter is not entered correctly. Expected number',
          },
        },
        {
          description: 'Negative parameter: (-1) => Enter a positive number',
          arguments: ['-1'],
          result: {
            status: 'failed',
            reason: 'Enter a positive number',
          },
        },
        {
          description: 'With parameter zero: (0) => The parameter must be greater than 10',
          arguments: ['0'],
          result: {
            status: 'failed',
            reason: 'The parameter must be greater than 10',
          },
        },
        {
          description: 'With parameter: (105 symbols) => The parameter must be less than 100 symbols',
          arguments: ['0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104'],
          result: {
            status: 'failed',
            reason: 'The parameter must be less than 100 symbols',
          },
        },
      ];

      error.forEach((el) => {
        it(el.description, () => {
          assert.deepEqual(
            checkParamTask4(...el.arguments),
            el.result,
          );
        });
      });
    });
  });
};

export default test4;
