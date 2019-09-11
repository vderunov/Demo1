import { makeTrianglesSorting } from '../../../main.js';
import { assert } from '../mainTest.js';

mocha.setup('bdd');

describe('Triangle sorting', () => {
    const parameter = [
        {
            vertices: 'ABC',
            a: 10,
            b: 20,
            c: 22.36,
        },
    ];

    it('Does the function return an array?', () => {
        assert.typeOf(makeTrianglesSorting(parameter), 'array');
    });

    it('Result test: ZHO, DEV, IKL, ABC, ZIP', () => {
        assert.deepEqual(
            makeTrianglesSorting([
                {
                    vertices: 'ZHO',
                    z: 10,
                    h: 2019e-2,
                    o: 22.36,
                },
                {
                    vertices: 'DEV',
                    d: 13,
                    e: 14,
                    v: 15,
                },
                {
                    vertices: 'ZIP',
                    z: 6,
                    i: 10,
                    p: 1114e-2,
                },
                {
                    vertices: 'ABC',
                    a: 6,
                    b: 10,
                    c: 12.07,
                },
                {
                    vertices: 'IKL',
                    i: 9,
                    k: 12,
                    l: 13.65,
                },
            ]),
            ['ZHO', 'DEV', 'IKL', 'ABC', 'ZIP'],
        );
    });
});
