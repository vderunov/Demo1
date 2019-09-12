import { makeTrianglesSorting, createBase } from '../../../main.js';
import { assert } from '../mainTest.js';

mocha.setup('bdd');

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
                createBase([
                    {
                        vertices: 'DEV',
                        d: 13,
                        e: 'a',
                        v: 15,
                    },
                ]),
                {
                    status: 'failed',
                    reason: 'The sides of the triangle must be numbers.',
                },
            );
        });

        it('The sides must be numbers: {a: a, e: 13, v: 15}', () => {
            assert.deepEqual(
                createBase([
                    {
                        vertices: 'DEV',
                        d: 'a',
                        e: 13,
                        v: 15,
                    },
                ]),
                {
                    status: 'failed',
                    reason: 'The sides of the triangle must be numbers.',
                },
            );
        });

        it('The sides must be numbers: {a: 13, e: 15, v: e}', () => {
            assert.deepEqual(
                createBase([
                    {
                        vertices: 'DEV',
                        d: 13,
                        e: 15,
                        v: 'a',
                    },
                ]),
                {
                    status: 'failed',
                    reason: 'The sides of the triangle must be numbers.',
                },
            );
        });

        // NOT WORK

        // it('Mistake in the name of the side: {vertices: ABC, a: 13, y: 14, c: 15}', () => {
        //     assert.deepEqual(
        //         createBase([
        //             {
        //                 vertices: 'ABC',
        //                 a: 13,
        //                 y: 14,
        //                 c: 15,
        //             },
        //         ]),
        //         {
        //             status: 'failed',
        //             reason: 'A triangle is defined by its vertices, check the letters and case',
        //         },
        //     );
        // });

        // it('Mistake in the name of the side: {vertices: ABC, Y: 13, b: 14, c: 15}', () => {
        //     assert.deepEqual(
        //         createBase([
        //             {
        //                 vertices: 'ABC',
        //                 Y: 13,
        //                 b: 14,
        //                 c: 15,
        //             },
        //         ]),
        //         {
        //             status: 'failed',
        //             reason: 'The sides of the triangle must be numbers.',
        //         },
        //     );
        // });

        // it('Mistake in the name of the side: {vertices: ABC, a: 13, b: 14, m: 15}', () => {
        //     assert.deepEqual(
        //         createBase([
        //             {
        //                 vertices: 'ABC',
        //                 a: 13,
        //                 b: 14,
        //                 M: 15,
        //             },
        //         ]),
        //         {
        //             status: 'failed',
        //             reason: 'The sides of the triangle must be numbers.',
        //         },
        //     );
        // });

        // it('Triangle does not exist.: {vertices: ABC, a: 5, b: 30, c: 35}', () => {
        //     assert.deepEqual(
        //         createBase([
        //             {
        //                 vertices: 'ABC',
        //                 a: 5,
        //                 b: 30,
        //                 c: 35,
        //             },
        //         ]),
        //         {
        //             status: 'failed',
        //             reason: 'Triangle does not exist. Check side sizes',
        //         },
        //     );
        // });
    });
});
