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

    const valid = [
      {
        description:
          'With values: min: 233456, max: 554321; result: easy: 19536, hard: 18528',
        arguments: [
          {
            min: '233456',
            max: '554321',
          },
        ],
        result: {
          easy: 19536,
          hard: 18528,
          winner: 'Winner: Easy way to count',
        },
      },
      {
        description:
          'With values: min: 000100, max: 500500; result: easy: 19536, hard: 18528',
        arguments: [
          {
            min: '000100',
            max: '500500',
          },
        ],
        result: {
          easy: 27646,
          hard: 27652,
          winner: 'Winner: Hard way to count',
        },
      },
      {
        description:
          'With values: min: 000000, max: 999999; result: easy: 55252, hard: 55252',
        arguments: [
          {
            min: '000000',
            max: '999999',
          },
        ],
        result: {
          easy: 55252,
          hard: 55252,
          winner: 'Winner: Hard way to count',
        },
      },
      {
        description:
          'With values: min: 123456, max: 654321; result: easy: 31607, hard: 30213',
        arguments: [
          {
            min: '123456',
            max: '654321',
          },
        ],
        result: {
          easy: 31607,
          hard: 30213,
          winner: 'Winner: Easy way to count',
        },
      },
    ];

    valid.forEach(el => {
      it(el.description, () => {
        assert.deepEqual(luckyTicketCounting(...el.arguments), el.result);
      });
    });

    describe('Error conditions', () => {
      const error = [
        {
          description: 'Empty parameters: ({ min: , max:  })',
          arguments: [{ min: '', max: '' }],
          result: {
            status: 'failed',
            reason: 'Empty parameters: enter parameters min and max',
          },
        },
        {
          description: 'Min more max: ({ min: 654321 , max:123456  })',
          arguments: [{ min: '654321', max: '123456' }],
          result: {
            status: 'failed',
            reason:
              'The min property must not be greater than the max property',
          },
        },
        {
          description: 'Max value 999999: ({ min: 1999999 , max:123456  })',
          arguments: [{ min: '1999999', max: '123456' }],
          result: {
            status: 'failed',
            reason:
              'The maximum allowable value of the min and max properties is 999999',
          },
        },
        {
          description: 'Max value 999999: ({ min: 123456 , max:1999999  })',
          arguments: [{ min: '123456', max: '1999999' }],
          result: {
            status: 'failed',
            reason:
              'The maximum allowable value of the min and max properties is 999999',
          },
        },
        {
          description: 'Only numbers expected: ({ min: 1234tY , max:123456  })',
          arguments: [{ min: '1234tY', max: '123456' }],
          result: {
            status: 'failed',
            reason: 'Only numbers expected',
          },
        },
        {
          description:
            'Only numbers expected: ({ min: 123456 , max:1#*&$Q#  })',
          arguments: [{ min: '1234tY', max: '7#*&$Q' }],
          result: {
            status: 'failed',
            reason: 'Only numbers expected',
          },
        },
      ];

      error.forEach(el => {
        it(el.description, () => {
          assert.deepEqual(checkParamTask5(...el.arguments), el.result);
        });
      });
    });
  });
};

export default test5;
