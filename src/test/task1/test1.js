import showChessBoard from '../../task1.js';
import checkParamTask1 from '../../components/checkParamTask1.js';

const test1 = function makeTestsForTask1(assert) {
  describe('Show Chessboard', () => {
    it('Does the function return a string?', () => {
      assert.typeOf(showChessBoard(8, 8, '*'), 'string');
    });

    describe('With valid parameters', () => {
      it('With parameters: (4, 4, *)', () => {
        assert.equal(showChessBoard(4, 4, '*'), ' * *\n' + '* * \n' + ' * *\n' + '* * \n');
      });

      it('With parameters: (6, 6, *)', () => {
        assert.equal(
          showChessBoard(6, 6, '*'),
          ' * * *\n' + '* * * \n' + ' * * *\n' + '* * * \n' + ' * * *\n' + '* * * \n',
        );
      });

      it('With parameters: (8, 8, *)', () => {
        assert.equal(
          showChessBoard(8, 8, '*'),
          ' * * * *\n'
            + '* * * * \n'
            + ' * * * *\n'
            + '* * * * \n'
            + ' * * * *\n'
            + '* * * * \n'
            + ' * * * *\n'
            + '* * * * \n',
        );
      });
    });

    describe('Error conditions', () => {
      it('Not enough parameters: ()', () => {
        assert.deepEqual(checkParamTask1(), {
          status: 'failed',
          reason: 'Not enough parameters. Expected parameters: 1. Number, 2. Number, 3. String',
        });
      });

      it('Not enough parameters: (10, 10)', () => {
        assert.deepEqual(checkParamTask1(10, 10), {
          status: 'failed',
          reason: 'Not enough parameters. Expected parameters: 1. Number, 2. Number, 3. String',
        });
      });

      it('Not enough parameters: (10, *)', () => {
        assert.deepEqual(checkParamTask1(10, '*'), {
          status: 'failed',
          reason: 'Not enough parameters. Expected parameters: 1. Number, 2. Number, 3. String',
        });
      });

      it('Negative length: (-1, 10, *)', () => {
        assert.deepEqual(checkParamTask1(-1, 10, '*'), {
          status: 'failed',
          reason: 'Length and width cannot be negative',
        });
      });

      it('Negative width: (10, -1, *)', () => {
        assert.deepEqual(checkParamTask1(-1, 10, '*'), {
          status: 'failed',
          reason: 'Length and width cannot be negative',
        });
      });

      it('Length = 0: (0, 10, *)', () => {
        assert.deepEqual(checkParamTask1('0', 10, '*'), {
          status: 'failed',
          reason: 'Length and width cannot be 0',
        });
      });

      it('Width = 0: (10, 0, *)', () => {
        assert.deepEqual(checkParamTask1(10, '0', '*'), {
          status: 'failed',
          reason: 'Length and width cannot be 0',
        });
      });

      it('Width and length must be equal: (7, 10, *)', () => {
        assert.deepEqual(checkParamTask1(7, 10, '*'), {
          status: 'failed',
          reason: 'Width and length must be equal',
        });
      });

      it('Width and length must be equal: (10, 7, *)', () => {
        assert.deepEqual(checkParamTask1(10, 7, '*'), {
          status: 'failed',
          reason: 'Width and length must be equal',
        });
      });

      it('Expected only one character (example: * ): (10, 10, **)', () => {
        assert.deepEqual(checkParamTask1(10, 10, '**'), {
          status: 'failed',
          reason: 'Expected only one character (example: "*")',
        });
      });

      it('The first and second parameters must be numbers: (10, *, *)', () => {
        assert.deepEqual(checkParamTask1(10, '*', '*'), {
          status: 'failed',
          reason: 'The first and second parameters must be numbers',
        });
      });

      it('The first and second parameters must be numbers: (*, 10, *)', () => {
        assert.deepEqual(checkParamTask1('*', 10, '*'), {
          status: 'failed',
          reason: 'The first and second parameters must be numbers',
        });
      });

      it('The symbol  = empty string: (10, 10, " ")', () => {
        assert.deepEqual(checkParamTask1(10, 10, ' '), {
          status: 'failed',
          reason: 'The symbol cannot be an empty string',
        });
      });

      it('Maximum board size 50 x 50. (55, 55, *)', () => {
        assert.deepEqual(checkParamTask1(55, 55, '*'), {
          status: 'failed',
          reason: 'Maximum board size 50 x 50',
        });
      });

      it('Length and width must be even: (3, 3, *)', () => {
        assert.deepEqual(checkParamTask1(3, 3, '*'), {
          status: 'failed',
          reason: 'Length and width must be even: (3, 3, *)',
        });
      });
    });
  });
};

export default test1;
