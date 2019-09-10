'use strict';

import { checkParameters } from './components/checkParamTask3.js';

export function makeTrianglesSorting(arrTriangles) {
    let arrResultSortedTriangles = [],
        parameterError,
        array = [],
        i;

    parameterError = checkParameters(arrTriangles);

    if (parameterError) {
        return parameterError;
    }

    for (i = 0; i < arrTriangles.length; i++) {
        const [vertices, a, b, c] = Object.values(arrTriangles[i]);

        if (a > 0 && b > 0 && c > 0 && (a + b > c && b + c > a && a + c > b)) {
            // Determine the half-perimeter
            const p = (a + b + c) * 0.5;
            // use Heron's formula
            const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            array.push({ vertices: vertices, areaTriangle: s });
        }
    }
    array.sort((a, b) => a.areaTriangle - b.areaTriangle).reverse();
    array.forEach(element => arrResultSortedTriangles.push(element.vertices));

    return arrResultSortedTriangles;
}

// console.log(
//     makeTrianglesSorting([
//         {
//             vertices: 'ZHO',
//             z: 10,
//             h: 2019e-2,
//             o: 22.36,
//         },
//         {
//             vertices: 'DEV',
//             d: 13,
//             e: 14,
//             v: 15,
//         },
//         {
//             vertices: 'ZIP',
//             z: 6,
//             i: 10,
//             p: 1114e-2,
//         },
//         {
//             vertices: 'ABC',
//             a: 6,
//             b: 10,
//             c: 12.07,
//         },
//         {
//             vertices: 'IKL',
//             i: 9,
//             k: 12,
//             l: 13.65,
//         },
//     ])
// );
