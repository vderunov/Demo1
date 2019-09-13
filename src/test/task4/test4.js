import getPalindrome from '../../task4.js';
import checkParamTask4 from '../../components/checkParamTask4.js';

const test4 = function makeTestsForTask4(assert) {
  describe('Palindrome', () => {
    it('Does the function return a number?', () => {
      assert.typeOf(getPalindrome('1234437'), 'number');
    });

    it('A palindrome from number 1234437, is it 3443?', () => {
      assert.equal(getPalindrome('1234437'), 3443);
    });

    it('A palindrome from number 12344371, is it 3443?', () => {
      assert.equal(getPalindrome('12344371'), 3443);
    });

    it('A palindrome from number 3443, is it 3443?', () => {
      assert.equal(getPalindrome('3443'), 3443);
    });

    it('A palindrome from number 200212344371, is it 3443?', () => {
      assert.equal(getPalindrome('200212344371'), 3443);
    });

    it('A palindrome from number 123456789, is it 0?', () => {
      assert.equal(getPalindrome('123456789'), 0);
    });

    it('A palindrome from number 645345543900, is it 345543?', () => {
      assert.equal(getPalindrome('645345543900'), 345543);
    });

    describe('Error conditions', () => {
      it('Empty parameters: Parameters are missing. Enter valid parameters', () => {
        assert.deepEqual(checkParamTask4(), {
          status: 'failed',
          reason: 'Parameters are missing. Enter valid parameters',
        });
      });

      it('Literal parametrs: (asd) => The parameter is not entered correctly. Expected number', () => {
        assert.deepEqual(checkParamTask4('asd'), {
          status: 'failed',
          reason: 'The parameter is not entered correctly. Expected number',
        });
      });

      it('Negative parameter: (-1) => Enter a positive number', () => {
        assert.deepEqual(checkParamTask4('-1'), {
          status: 'failed',
          reason: 'Enter a positive number',
        });
      });

      it('With parameter zero: (0) => The parameter must be greater than 10', () => {
        assert.deepEqual(checkParamTask4('0'), {
          status: 'failed',
          reason: 'The parameter must be greater than 10',
        });
      });

      it('With parameter: (105 symbols) => The parameter must be less than 100 symbols', () => {
        assert.deepEqual(
          checkParamTask4(
            '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104',
          ),
          {
            status: 'failed',
            reason: 'The parameter must be less than 100 symbols',
          },
        );
      });
    });
  });
};

export default test4;
