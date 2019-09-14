import analyzeEnvelopes from '../../task2.js';
import checkParamTask2 from '../../components/checkParamTask2.js';

const test2 = function makeTestsForTask2(assert) {
  describe('Analysis of envelopes', () => {
    const valid = [
      {
        description: 'Sides of envelope A are larger than sides of envelope B',
        arguments: [{ width: 10, height: 11 }, { width: 9, height: 10 }],
        result: '0',
      },
    ];

    valid.forEach(el => {
      it(el.description, () => {
        assert.equal(analyzeEnvelopes(...el.arguments), el.result);
      });
    });

    describe('Error conditions', () => {
      const error = [
        {
          description:
            'Empty parameters: { width: ``, height: `` }, { width: ``, height: `` }',
          arguments: [{ width: '', height: '' }, { width: '', height: '' }],
          result: {
            status: 'failed',
            reason: 'Empty parameters. Enter valid parameters',
          },
        },
        {
          description:
            'Env A width is missing: { width: ``, height: 10 }, { width: 11, height: 12 }',
          arguments: [{ width: '', height: 10 }, { width: 11, height: 12 }],
          result: {
            status: 'failed',
            reason: 'Envelope A width is missing',
          },
        },
        {
          description:
            'Env A height is missing: { width: 10, height: `` }, { width: 11, height: 12 }',
          arguments: [{ width: 10, height: '' }, { width: 11, height: 12 }],
          result: {
            status: 'failed',
            reason: 'Envelope A height is missing',
          },
        },
        {
          description:
            'Env B width is missing: { width: 10, height: 11 }, { width: ``, height: 12 }',
          arguments: [{ width: 10, height: 11 }, { width: '', height: 12 }],
          result: {
            status: 'failed',
            reason: 'Envelope B width is missing',
          },
        },
        {
          description:
            'Env B height is missing: { width: 10, height: 11 }, { width: 12, height: `` }',
          arguments: [{ width: 10, height: 11 }, { width: 12, height: '' }],
          result: {
            status: 'failed',
            reason: 'Envelope B height is missing',
          },
        },
        {
          description:
            'Wrong width: { width: a10, height: 11 }, { width: 9, height: 10 }',
          arguments: [{ width: 'a10', height: 11 }, { width: 9, height: 10 }],
          result: {
            status: 'failed',
            reason:
              'The wrong param width of the envelope-A. Enter the numbers',
          },
        },
        {
          description:
            'Wrong width: { width: a10, height: 11 }, { width: 9, height: 10 }',
          arguments: [{ width: 'a10', height: 11 }, { width: 9, height: 10 }],
          result: {
            status: 'failed',
            reason:
              'The wrong param width of the envelope-A. Enter the numbers',
          },
        },
        {
          description:
            'Wrong width: { width: 10, height: 11 }, { width: a10, height: 10 }',
          arguments: [{ width: 10, height: 11 }, { width: 'a10', height: 12 }],
          result: {
            status: 'failed',
            reason:
              'The wrong param width of the envelope-B. Enter the numbers',
          },
        },
        {
          description:
            'Wrong width: { width: 10, height: 11 }, { width: , height: JKO12 }',
          arguments: [
            { width: 10, height: 11 },
            { width: 10, height: 'JKO12' },
          ],
          result: {
            status: 'failed',
            reason:
              'The wrong param height of the envelope-B. Enter the numbers',
          },
        },
        {
          description:
            'Width cannot match height: { width: 10, height: 10 }, { width: 10, height: 10 }',
          arguments: [{ width: 10, height: 10 }, { width: 10, height: 10 }],
          result: {
            status: 'failed',
            reason: 'Width cannot match height',
          },
        },
        {
          description:
            'Expected width between 1 - 50: { width: -6, height: -4 }, { width: 9, height: 10 }',
          arguments: [{ width: -6, height: 12 }, { width: 10, height: 11 }],
          result: {
            status: 'failed',
            reason: 'Attention envelope A. Expected width between 1 - 50',
          },
        },
        {
          description:
            'Expected height between 1 - 50: { width: 5, height: -9 }, { width: 9, height: 10 }',
          arguments: [{ width: 5, height: -9 }, { width: 10, height: 11 }],
          result: {
            status: 'failed',
            reason: 'Attention envelope A. Expected height between 1 - 50',
          },
        },
        {
          description:
            'Expected width between 1 - 50: { width: 5, height: 10 }, { width: -7, height: 10 }',
          arguments: [{ width: 5, height: 10 }, { width: -7, height: 11 }],
          result: {
            status: 'failed',
            reason: 'Attention envelope B. Expected width between 1 - 50',
          },
        },
        {
          description:
            'Expected height between 1 - 50: { width: 5, height: 10 }, { width: 7, height: -90 }',
          arguments: [{ width: 5, height: 10 }, { width: 7, height: -90 }],
          result: {
            status: 'failed',
            reason: 'Attention envelope B. Expected height between 1 - 50',
          },
        },
      ];

      error.forEach(el => {
        it(el.description, () => {
          assert.deepEqual(checkParamTask2(...el.arguments), el.result);
        });
      });
    });
  });
};

export default test2;
