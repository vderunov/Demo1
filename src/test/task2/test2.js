import analyzeEnvelopes from '../../task2.js';
import checkParamTask2 from '../../components/checkParamTask2.js';

export default function makeTestsForTask2(assert) {
  describe('Analysis of envelopes', () => {
    it('Does the function return a number?', () => {
      assert.typeOf(
        analyzeEnvelopes(
          {
            width: 9,
            height: 5,
          },
          {
            width: 9.49,
            height: 1,
          },
        ),
        'number',
      );
    });

    it('With parameters: { width: 9, height: 5 }, { width: 9.49, height: 1 }. Result: 1', () => {
      assert.deepEqual(
        analyzeEnvelopes({ width: 9, height: 5 }, { width: 9.49, height: 1 }),
        1,
      );
    });

    it('With parameters: { width: 2, height: 7 }, { width: 8, height: 9 }. Result: 2', () => {
      assert.deepEqual(
        analyzeEnvelopes({ width: 2, height: 7 }, { width: 8, height: 9 }),
        2,
      );
    });

    it('With parameters: { width: 9, height: 5 }, { width: 9, height: 4 }. Result: 0', () => {
      assert.deepEqual(
        analyzeEnvelopes({ width: 9, height: 5 }, { width: 9, height: 4 }),
        0,
      );
    });

    describe('Error conditions', () => {
      it('Empty parameters: { width: ``, height: `` }, { width: ``, height: `` }', () => {
        assert.deepEqual(
          checkParamTask2({ width: '', height: '' }, { width: '', height: '' }),
          {
            status: 'failed',
            reason: 'Empty parameters. Enter valid parameters',
          },
        );
      });

      it('Env A width is missing: { width: ``, height: 10 }, { width: 11, height: 12 }', () => {
        assert.deepEqual(
          checkParamTask2({ width: '', height: 10 }, { width: 11, height: 12 }),
          {
            status: 'failed',
            reason: 'Envelope A width is missing',
          },
        );
      });

      it('Env A height is missing: { width: 10, height: `` }, { width: 11, height: 12 }', () => {
        assert.deepEqual(
          checkParamTask2({ width: 10, height: '' }, { width: 11, height: 12 }),
          {
            status: 'failed',
            reason: 'Envelope A height is missing',
          },
        );
      });

      it('Env B width is missing: { width: 10, height: 11 }, { width: ``, height: 12 }', () => {
        assert.deepEqual(
          checkParamTask2({ width: 10, height: 11 }, { width: '', height: 12 }),
          {
            status: 'failed',
            reason: 'Envelope B width is missing',
          },
        );
      });

      it('Env B height is missing: { width: 10, height: 11 }, { width: 12, height: `` }', () => {
        assert.deepEqual(
          checkParamTask2({ width: 10, height: 11 }, { width: 12, height: '' }),
          {
            status: 'failed',
            reason: 'Envelope B height is missing',
          },
        );
      });

      it('Wrong width: { width: a10, height: 11 }, { width: 9, height: 10 }', () => {
        assert.deepEqual(
          checkParamTask2(
            { width: 'a10', height: 11 },
            { width: 9, height: 10 },
          ),
          {
            status: 'failed',
            reason:
              'The wrong param width of the envelope-A. Enter the numbers',
          },
        );
      });

      it('Wrong width: { width: 10, height: 11 }, { width: a10, height: 10 }', () => {
        assert.deepEqual(
          checkParamTask2(
            { width: 10, height: 11 },
            { width: 'a10', height: 12 },
          ),
          {
            status: 'failed',
            reason:
              'The wrong param width of the envelope-B. Enter the numbers',
          },
        );
      });

      it('Wrong width: { width: 10, height: 11 }, { width: , height: JKO12 }', () => {
        assert.deepEqual(
          checkParamTask2(
            { width: 10, height: 11 },
            { width: 10, height: 'JKO12' },
          ),
          {
            status: 'failed',
            reason:
              'The wrong param height of the envelope-B. Enter the numbers',
          },
        );
      });

      it('Width cannot match height: { width: 10, height: 10 }, { width: 10, height: 10 }', () => {
        assert.deepEqual(
          checkParamTask2({ width: 10, height: 10 }, { width: 10, height: 10 }),
          {
            status: 'failed',
            reason: 'Width cannot match height',
          },
        );
      });

      it('Expected width between 1 - 50: { width: -6, height: -4 }, { width: 9, height: 10 }', () => {
        assert.deepEqual(
          checkParamTask2({ width: -6, height: 12 }, { width: 10, height: 11 }),
          {
            status: 'failed',
            reason: 'Attention envelope A. Expected width between 1 - 50',
          },
        );
      });

      it('Expected height between 1 - 50: { width: 5, height: -9 }, { width: 9, height: 10 }', () => {
        assert.deepEqual(
          checkParamTask2({ width: 5, height: -9 }, { width: 10, height: 11 }),
          {
            status: 'failed',
            reason: 'Attention envelope A. Expected height between 1 - 50',
          },
        );
      });

      it('Expected width between 1 - 50: { width: 5, height: 10 }, { width: -7, height: 10 }', () => {
        assert.deepEqual(
          checkParamTask2({ width: 5, height: 10 }, { width: -7, height: 11 }),
          {
            status: 'failed',
            reason: 'Attention envelope B. Expected width between 1 - 50',
          },
        );
      });

      it('Expected height between 1 - 50: { width: 5, height: 10 }, { width: 7, height: -90 }', () => {
        assert.deepEqual(
          checkParamTask2({ width: 5, height: 10 }, { width: 7, height: -90 }),
          {
            status: 'failed',
            reason: 'Attention envelope B. Expected height between 1 - 50',
          },
        );
      });
    });
  });
}
