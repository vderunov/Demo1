import { checkParameters } from './components/checkParamTask3.js';

export function makeTrianglesSorting(arrTriangles) {
    const array = [];

    const parameterError = checkParameters(arrTriangles);

    if (parameterError) {
        return parameterError;
    }

    for (let i = 0; i < arrTriangles.length; i++) {
        const [vertices, a, b, c] = Object.values(arrTriangles[i]);
        // Determine the half-perimeter
        const p = (a + b + c) * 0.5;
        // use Heron's formula
        const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        array.push({ vertices, areaTriangle: s });
    }
    array.sort((a, b) => b.areaTriangle - a.areaTriangle);
    return array.map((element) => element.vertices);
}

export default makeTrianglesSorting;

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
//     ]),
// );
