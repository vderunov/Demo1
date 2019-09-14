import showChessBoard from '../../task1.js';
import checkParamTask1 from '../../components/checkParamTask1.js';

const test1 = function makeTestsForTask1(assert) {
  describe('Show Chessboard', () => {
    it('Does the function return a string?', () => {
      assert.typeOf(showChessBoard(8, 8, '*'), 'string');
    });

    describe('With valid parameters', () => {
      const valid = [
        {
          description: 'With parameters: (4, 4, *)',
          arguments: [4, 4, '*'],
          result: ' * *\n' + '* * \n' + ' * *\n' + '* * \n',
        },
        {
          description: 'With parameters: (4, 4, *)',
          arguments: [4, 4, '*'],
          result: ' * *\n' + '* * \n' + ' * *\n' + '* * \n',
        },
        {
          description: 'With parameters: (6, 6, *)',
          arguments: [6, 6, '*'],
          result:
            ' * * *\n' +
            '* * * \n' +
            ' * * *\n' +
            '* * * \n' +
            ' * * *\n' +
            '* * * \n',
        },
        {
          description: 'With parameters: (8, 8, *)',
          arguments: [8, 8, '*'],
          result:
            ' * * * *\n' +
            '* * * * \n' +
            ' * * * *\n' +
            '* * * * \n' +
            ' * * * *\n' +
            '* * * * \n' +
            ' * * * *\n' +
            '* * * * \n',
        },
      ];

      valid.forEach(el => {
        it(el.description, () => {
          assert.equal(showChessBoard(...el.arguments), el.result);
        });
      });
    });

    describe('Error conditions', () => {
      const error = [
        {
          description: 'Not enough parameters: ()',
          arguments: [],
          result: {
            status: 'failed',
            reason:
              'Not enough parameters. Expected parameters: 1. Number, 2. Number, 3. String',
          },
        },
        {
          description: 'Not enough parameters: (10, 10)',
          arguments: [10, 10],
          result: {
            status: 'failed',
            reason:
              'Not enough parameters. Expected parameters: 1. Number, 2. Number, 3. String',
          },
        },
        {
          description: 'Not enough parameters: (10, *)',
          arguments: [10, '*'],
          result: {
            status: 'failed',
            reason:
              'Not enough parameters. Expected parameters: 1. Number, 2. Number, 3. String',
          },
        },
        {
          description: 'Negative length: (-1, 10, *)',
          arguments: [-1, 10, '*'],
          result: {
            status: 'failed',
            reason: 'Length and width cannot be negative',
          },
        },
        {
          description: 'Negative width: (10, -1, *)',
          arguments: [10, -1, '*'],
          result: {
            status: 'failed',
            reason: 'Length and width cannot be negative',
          },
        },
        {
          description: 'Length = 0: (0, 10, *)',
          arguments: ['0', 10, '*'],
          result: {
            status: 'failed',
            reason: 'Length and width cannot be 0',
          },
        },
        {
          description: 'Width = 0: (10, 0, *)',
          arguments: [10, '0', '*'],
          result: {
            status: 'failed',
            reason: 'Length and width cannot be 0',
          },
        },
        {
          description: 'Width = 0: (7, 10, *)',
          arguments: [7, 10, '*'],
          result: {
            status: 'failed',
            reason: 'Width and length must be equal',
          },
        },
        {
          description: 'Width and length must be equal: (10, 7, *)',
          arguments: [10, 7, '*'],
          result: {
            status: 'failed',
            reason: 'Width and length must be equal',
          },
        },
        {
          description:
            'Expected only one character (example: * ): (10, 10, **)',
          arguments: [10, 10, '**'],
          result: {
            status: 'failed',
            reason: 'Expected only one character (example: "*")',
          },
        },
        {
          description:
            'The first and second parameters must be numbers: (10, *, *)',
          arguments: [10, '*', '*'],
          result: {
            status: 'failed',
            reason: 'The first and second parameters must be numbers',
          },
        },
        {
          description:
            'The first and second parameters must be numbers: (*, 10, *)',
          arguments: ['*', 10, '*'],
          result: {
            status: 'failed',
            reason: 'The first and second parameters must be numbers',
          },
        },
        {
          description: 'The symbol  = empty string: (10, 10, " ")',
          arguments: [10, 10, ' '],
          result: {
            status: 'failed',
            reason: 'The symbol cannot be an empty string',
          },
        },
        {
          description: 'Maximum board size 50 x 50. (55, 55, *)',
          arguments: [55, 55, '*'],
          result: {
            status: 'failed',
            reason: 'Maximum board size 50 x 50',
          },
        },
        {
          description: 'Length and width must be even: (3, 3, *)',
          arguments: [3, 3, '*'],
          result: {
            status: 'failed',
            reason: 'Length and width must be even: (3, 3, *)',
          },
        },
      ];

      error.forEach(el => {
        it(el.description, () => {
          assert.deepEqual(checkParamTask1(...el.arguments), el.result);
        });
      });
    });
  });
};

export default test1;
