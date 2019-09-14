import makeTrianglesSorting from '../../task3.js';
import checkParamTask3 from '../../components/checkParamTask3.js';

const test3 = function makeTestsForTask3(assert) {
  describe('Triangle sorting', () => {
    it('Does the function return an array?', () => {
      assert.typeOf(
        makeTrianglesSorting([
          {
            vertices: 'ABC',
            a: 10,
            b: 20,
            c: 22.36,
          },
        ]),
        'array',
      );
    });

    describe('With valid parameters', () => {
      const valid = [
        {
          description: '{vertices: ABC, a: 13, b: 14, c: 15}',
          arguments: [
            {
              vertices: 'ABC',
              a: 6,
              b: 10,
              c: 12.07,
            },
          ],
          result: ['ABC'],
        },
        {
          description:
            '{vertices: QWE, q: 32, w: 12, e: 24}, {vertices: ZXC, z: 11, x: 17, c: 21}',
          arguments: [
            {
              vertices: 'QWE',
              a: 32,
              b: 12,
              c: 24,
            },
            {
              vertices: 'ZXC',
              a: 11,
              b: 17,
              c: 21,
            },
          ],
          result: ['QWE', 'ZXC'],
        },
        {
          description:
            '{vertices: DEV, d: 13, e: 14, v: 15}, {vertices: IKL, i: 9, k: 12, l: 13.65}, {vertices: ABC, a: 6, b: 10, c: 12.07}',
          arguments: [
            {
              vertices: 'DEV',
              d: 13,
              e: 14,
              v: 15,
            },
            {
              vertices: 'IKL',
              i: 9,
              k: 12,
              l: 13.65,
            },
            {
              vertices: 'ABC',
              a: 6,
              b: 10,
              c: 12.07,
            },
          ],
          result: ['DEV', 'IKL', 'ABC'],
        },
      ];

      valid.forEach(el => {
        it(el.description, () => {
          assert.deepEqual(makeTrianglesSorting(el.arguments), el.result);
        });
      });
    });

    describe('Error conditions', () => {
      const error = [
        {
          description: 'Empty parameter. All fields must be filled!',
          arguments: [
            {
              vertices: '',
              d: '',
              e: '',
              v: '',
            },
          ],
          result: {
            status: 'failed',
            reason: 'Empty parameter. All fields must be filled!',
          },
        },
        {
          description: 'The sides must be numbers: {a: 13, e: a, v: 15}',
          arguments: [
            {
              vertices: 'DEV',
              d: 13,
              e: 'a',
              v: 15,
            },
          ],
          result: {
            status: 'failed',
            reason: 'The sides of the triangle must be numbers',
          },
        },
        {
          description: 'The sides must be numbers: {a: a, e: 13, v: 15}',
          arguments: [
            {
              vertices: 'DEV',
              d: 'a',
              e: 13,
              v: 15,
            },
          ],
          result: {
            status: 'failed',
            reason: 'The sides of the triangle must be numbers',
          },
        },
        {
          description: 'The sides must be numbers: {a: 13, e: 15, v: e}',
          arguments: [
            {
              vertices: 'DEV',
              d: 13,
              e: 15,
              v: 'a',
            },
          ],
          result: {
            status: 'failed',
            reason: 'The sides of the triangle must be numbers',
          },
        },
        {
          description: 'The sides must be numbers: {a: 13, e: ___%$!#@, v: e}',
          arguments: [
            {
              vertices: 'DEV',
              d: '___%$!#@',
              e: 15,
              v: 16,
            },
          ],
          result: {
            status: 'failed',
            reason: 'The sides of the triangle must be numbers',
          },
        },
        {
          description:
            'Mistake in the name of the side: {vertices: ABC, Y: 13, b: 14, c: 15}',
          arguments: [
            {
              vertices: 'ABC',
              Y: 13,
              b: 14,
              c: 15,
            },
          ],
          result: {
            status: 'failed',
            reason:
              'A triangle is defined by its vertices, check the letters and case',
          },
        },
        {
          description:
            'Mistake in the name of the side: {vertices: ABC, a: 13, M: 14, c: 15}',
          arguments: [
            {
              vertices: 'ABC',
              a: 13,
              M: 14,
              c: 15,
            },
          ],
          result: {
            status: 'failed',
            reason:
              'A triangle is defined by its vertices, check the letters and case',
          },
        },
        {
          description:
            'Mistake in the name of the side: {vertices: ABC, a: 13, b: 14, M: 15}',
          arguments: [
            {
              vertices: 'ABC',
              a: 13,
              b: 14,
              M: 15,
            },
          ],
          result: {
            status: 'failed',
            reason:
              'A triangle is defined by its vertices, check the letters and case',
          },
        },
        {
          description:
            'Triangle does not exist.: {vertices: ABC, a: 5, b: 30, c: 35}',
          arguments: [
            {
              vertices: 'ABC',
              a: 5,
              b: 30,
              c: 35,
            },
          ],
          result: {
            status: 'failed',
            reason: 'Triangle does not exist. Check side sizes',
          },
        },
        {
          description:
            'Triangle does not exist.: {vertices: ABC, a: 0, b: 0, c: 0}',
          arguments: [
            {
              vertices: 'ABC',
              a: 0,
              b: 0,
              c: 0,
            },
          ],
          result: {
            status: 'failed',
            reason: 'Triangle does not exist. Check side sizes',
          },
        },
        {
          description:
            'Triangle does not exist.: {vertices: ABC, a: 100, b: 17, c: 9}',
          arguments: [
            {
              vertices: 'ABC',
              a: 100,
              b: 17,
              c: 9,
            },
          ],
          result: {
            status: 'failed',
            reason: 'Triangle does not exist. Check side sizes',
          },
        },
        {
          description:
            'Triangle does not exist.: {vertices: ABC, a: 1, b: 2, c: 3}',
          arguments: [
            {
              vertices: 'ABC',
              a: 1,
              b: 2,
              c: 3,
            },
          ],
          result: {
            status: 'failed',
            reason: 'Triangle does not exist. Check side sizes',
          },
        },
        {
          description:
            'Vertices and sides must be different register: {vertices: ABC, A: 13, M: 14, c: 15}',
          arguments: [
            {
              vertices: 'ABC',
              A: 13,
              b: 14,
              c: 15,
            },
          ],
          result: {
            status: 'failed',
            reason: 'Vertices and sides must be different register',
          },
        },
        {
          description:
            'Vertices and sides must be different register: {vertices: ABC, a: 13, B: 14, c: 15}',
          arguments: [
            {
              vertices: 'ABC',
              a: 13,
              B: 14,
              c: 15,
            },
          ],
          result: {
            status: 'failed',
            reason: 'Vertices and sides must be different register',
          },
        },
        {
          description:
            'Vertices and sides must be different register: {vertices: ABC, a: 13, b: 14, C: 15}',
          arguments: [
            {
              vertices: 'ABC',
              a: 13,
              b: 14,
              C: 15,
            },
          ],
          result: {
            status: 'failed',
            reason: 'Vertices and sides must be different register',
          },
        },
      ];

      error.forEach(el => {
        it(el.description, () => {
          assert.deepEqual(checkParamTask3(el.arguments), el.result);
        });
      });
    });
  });
};

export default test3;
