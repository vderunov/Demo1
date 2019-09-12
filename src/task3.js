import { checkParameters } from './components/checkParamTask3.js';

document.querySelector('#get-sort').addEventListener('click', createBase);
document.querySelector('#clear-base-btn').addEventListener('click', clearBase);

let arrTrianglesBase = [];

export function makeTrianglesSorting(trianglesBase) {
    const array = [];

    for (let i = 0; i < trianglesBase.length; i++) {
        const [vertices, a, b, c] = Object.values(trianglesBase[i]);
        // Determine the half-perimeter
        const p = (a + b + c) * 0.5;
        // use Heron's formula
        const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        array.push({ vertices, areaTriangle: s });
    }
    array.sort((a, b) => b.areaTriangle - a.areaTriangle);

    return (document.querySelector('#root-triangles').innerHTML = array.map(
        element => element.vertices,
    ));
}

export function createBase() {
    const objTriangle = {};

    objTriangle.vertices = document.querySelector('#vertices').value;

    objTriangle[document.querySelector('#first-side-letter').value] = parseInt(
        document.querySelector('#first-side-size').value,
        10,
    );
    objTriangle[document.querySelector('#second-side-letter').value] = parseInt(
        document.querySelector('#second-side-size').value,
        10,
    );
    objTriangle[document.querySelector('#third-side-letter').value] = parseInt(
        document.querySelector('#third-side-size').value,
        10,
    );

    arrTrianglesBase.push(objTriangle);
    const parameterError = checkParameters(arrTrianglesBase);

    if (parameterError) {
        console.log(arrTrianglesBase);
        arrTrianglesBase = arrTrianglesBase.slice(0, arrTrianglesBase.length - 1);
        console.log(parameterError);
        return parameterError;
    }
    makeTrianglesSorting(arrTrianglesBase);

    return arrTrianglesBase;
}

function clearBase() {
    arrTrianglesBase = [];
}

export default makeTrianglesSorting;
