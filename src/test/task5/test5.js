import luckyTicketCounting from '../../task5.js';
import checkParamTask5 from '../../components/checkParamTask5.js';

const test5 = function makeTestsForTask5(assert) {
  describe('Lucky tickets', () => {
    it('Does the function return an object?', () => {
      assert.typeOf(
        luckyTicketCounting({
          min: '326323',
          max: '641235',
        }),
        'object',
      );
    });

    it('With values: min: 233456, max: 554321; result: easy: 19536, hard: 18528', () => {
      assert.deepEqual(
        luckyTicketCounting({
          min: '233456',
          max: '554321',
        }),
        {
          easy: 19536,
          hard: 18528,
          winner: 'Winner: Easy way to count',
        },
      );
    });

    it('With values: min: 000100, max: 500500; result: easy: 19536, hard: 18528', () => {
      assert.deepEqual(
        luckyTicketCounting({
          min: '000100',
          max: '500500',
        }),
        {
          easy: 27646,
          hard: 27652,
          winner: 'Winner: Hard way to count',
        },
      );
    });

    it('With values: min: 000000, max: 999999; result: easy: 55252, hard: 55252', () => {
      assert.deepEqual(
        luckyTicketCounting({
          min: '000000',
          max: '999999',
        }),
        {
          easy: 55252,
          hard: 55252,
          winner: 'Winner: Hard way to count',
        },
      );
    });

    it('With values: min: 123456, max: 654321; result: easy: 31607, hard: 30213', () => {
      assert.deepEqual(
        luckyTicketCounting({
          min: '123456',
          max: '654321',
        }),
        {
          easy: 31607,
          hard: 30213,
          winner: 'Winner: Easy way to count',
        },
      );
    });

    describe('Error conditions', () => {
      it('Empty parameters: ({ min: , max:  })', () => {
        assert.deepEqual(checkParamTask5({ min: '', max: '' }), {
          status: 'failed',
          reason: 'Empty parameters: enter parameters min and max',
        });
      });

      it('Min more max: ({ min: 654321 , max:123456  })', () => {
        assert.deepEqual(checkParamTask5({ min: '654321', max: '123456' }), {
          status: 'failed',
          reason: 'The min property must not be greater than the max property',
        });
      });

      it('Max value 999999: ({ min: 1999999 , max:123456  })', () => {
        assert.deepEqual(checkParamTask5({ min: '1999999', max: '123456' }), {
          status: 'failed',
          reason: 'The maximum allowable value of the min and max properties is 999999',
        });
      });

      it('Max value 999999: ({ min: 123456 , max:1999999  })', () => {
        assert.deepEqual(checkParamTask5({ min: '123456', max: '1999999' }), {
          status: 'failed',
          reason: 'The maximum allowable value of the min and max properties is 999999',
        });
      });

      it('Only numbers expected: ({ min: 1234tY , max:123456  })', () => {
        assert.deepEqual(checkParamTask5({ min: '1234tY', max: '123456' }), {
          status: 'failed',
          reason: 'Only numbers expected',
        });
      });

      it('Only numbers expected: ({ min: 123456 , max:1#*&$Q#  })', () => {
        assert.deepEqual(checkParamTask5({ min: '1234tY', max: '7#*&$Q' }), {
          status: 'failed',
          reason: 'Only numbers expected',
        });
      });
    });
  });
};

export default test5;
