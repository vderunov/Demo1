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
      it('{vertices: ABC, a: 13, b: 14, c: 15}', () => {
        assert.deepEqual(
          makeTrianglesSorting([
            {
              vertices: 'ABC',
              a: 6,
              b: 10,
              c: 12.07,
            },
          ]),
          ['ABC'],
        );
      });

      it('{vertices: QWE, q: 32, w: 12, e: 24}, {vertices: ZXC, z: 11, x: 17, c: 21}', () => {
        assert.deepEqual(
          makeTrianglesSorting([
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
          ]),
          ['QWE', 'ZXC'],
        );
      });

      it('{vertices: DEV, d: 13, e: 14, v: 15}, {vertices: IKL, i: 9, k: 12, l: 13.65}, {vertices: ABC, a: 6, b: 10, c: 12.07}', () => {
        assert.deepEqual(
          makeTrianglesSorting([
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
          ]),
          ['DEV', 'IKL', 'ABC'],
        );
      });
    });

    describe('Error conditions', () => {
      it('The sides must be numbers: {a: 13, e: a, v: 15}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'DEV',
              d: 13,
              e: 'a',
              v: 15,
            },
          ]),
          {
            status: 'failed',
            reason: 'The sides of the triangle must be numbers',
          },
        );
      });

      it('The sides must be numbers: {a: a, e: 13, v: 15}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'DEV',
              d: 'a',
              e: 13,
              v: 15,
            },
          ]),
          {
            status: 'failed',
            reason: 'The sides of the triangle must be numbers',
          },
        );
      });

      it('The sides must be numbers: {a: 13, e: 15, v: e}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'DEV',
              d: 13,
              e: 15,
              v: 'a',
            },
          ]),
          {
            status: 'failed',
            reason: 'The sides of the triangle must be numbers',
          },
        );
      });

      it('The sides must be numbers: {a: 13, e: ___%$!#@, v: e}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'DEV',
              d: '___%$!#@',
              e: 15,
              v: 16,
            },
          ]),
          {
            status: 'failed',
            reason: 'The sides of the triangle must be numbers',
          },
        );
      });

      it('Mistake in the name of the side: {vertices: ABC, Y: 13, b: 14, c: 15}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'ABC',
              Y: 13,
              b: 14,
              c: 15,
            },
          ]),
          {
            status: 'failed',
            reason: 'A triangle is defined by its vertices, check the letters and case',
          },
        );
      });

      it('Mistake in the name of the side: {vertices: ABC, a: 13, M: 14, c: 15}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'ABC',
              a: 13,
              M: 14,
              c: 15,
            },
          ]),
          {
            status: 'failed',
            reason: 'A triangle is defined by its vertices, check the letters and case',
          },
        );
      });

      it('Mistake in the name of the side: {vertices: ABC, a: 13, b: 14, M: 15}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'ABC',
              a: 13,
              b: 14,
              M: 15,
            },
          ]),
          {
            status: 'failed',
            reason: 'A triangle is defined by its vertices, check the letters and case',
          },
        );
      });

      it('Triangle does not exist.: {vertices: ABC, a: 5, b: 30, c: 35}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'ABC',
              a: 5,
              b: 30,
              c: 35,
            },
          ]),
          {
            status: 'failed',
            reason: 'Triangle does not exist. Check side sizes',
          },
        );
      });

      it('Triangle does not exist.: {vertices: ABC, a: 0, b: 0, c: 0}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'ABC',
              a: 0,
              b: 0,
              c: 0,
            },
          ]),
          {
            status: 'failed',
            reason: 'Triangle does not exist. Check side sizes',
          },
        );
      });

      it('Triangle does not exist.: {vertices: ABC, a: 100, b: 17, c: 9}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'ABC',
              a: 100,
              b: 17,
              c: 9,
            },
          ]),
          {
            status: 'failed',
            reason: 'Triangle does not exist. Check side sizes',
          },
        );
      });

      it('Triangle does not exist.: {vertices: ABC, a: 1, b: 2, c: 3}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'ABC',
              a: 1,
              b: 2,
              c: 3,
            },
          ]),
          {
            status: 'failed',
            reason: 'Triangle does not exist. Check side sizes',
          },
        );
      });

      it('Vertices and sides must be different register: {vertices: ABC, A: 13, M: 14, c: 15}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'ABC',
              A: 13,
              b: 14,
              c: 15,
            },
          ]),
          {
            status: 'failed',
            reason: 'Vertices and sides must be different register',
          },
        );
      });

      it('Vertices and sides must be different register: {vertices: ABC, a: 13, B: 14, c: 15}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'ABC',
              a: 13,
              B: 14,
              c: 15,
            },
          ]),
          {
            status: 'failed',
            reason: 'Vertices and sides must be different register',
          },
        );
      });

      it('Vertices and sides must be different register: {vertices: ABC, a: 13, b: 14, C: 15}', () => {
        assert.deepEqual(
          checkParamTask3([
            {
              vertices: 'ABC',
              a: 13,
              b: 14,
              C: 15,
            },
          ]),
          {
            status: 'failed',
            reason: 'Vertices and sides must be different register',
          },
        );
      });
    });
  });
};

export default test3;
