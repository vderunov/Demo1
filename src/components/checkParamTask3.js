import { isNumeric } from './isNumeric.js';

export function checkParameters(arrTriangles) {
    let index = 0;
    let element;

    if (!arrTriangles) {
        return {
            status: 'failed',
            reason: 'The parameters is empty. Enter an array of triangles represented by objects',
        };
    }

    if (!Array.isArray(arrTriangles)) {
        return {
            status: 'failed',
            reason: 'Expected parameter array of objects in parameters',
        };
    }

    if (arrTriangles.length === 0) {
        return { status: 'failed', reason: 'Incoming parameter empty array' };
    }

    for (element of arrTriangles) {
        index++;

        const [vertices, a, b, c] = Object.values(element);

        if (typeof element !== 'object') {
            return {
                status: 'failed',
                reason: 'Array elements must be objects with properties',
            };
        }

        if (Object.entries(element).length === 0) {
            return {
                status: 'failed',
                reason: `Object is empty, enter properties. Check triangle № ${index}`,
            };
        }

        if (!isNumeric(a) || !isNumeric(b) || !isNumeric(c)) {
            return {
                status: 'failed',
                reason: `The sides of the triangle must be numbers. Check the sides of the triangle: ${vertices}`,
            };
        }

        if (vertices === '') {
            return {
                status: 'failed',
                reason: `Pick the vertices of the triangle: №${index}`,
            };
        }

        if (a + b <= c || a + c <= b || b + c <= a) {
            return {
                status: 'failed',
                reason: `Triangle ${vertices} does not exist. Check side sizes`,
            };
        }

        const [name, keyOne, keyTwo, keyThree] = Object.keys(element);

        if (
            keyOne.toUpperCase() !== element[name][0]
            || keyTwo.toUpperCase() !== element[name][1]
            || keyThree.toUpperCase() !== element[name][2]
        ) {
            return {
                status: 'failed',
                reason: `A triangle is defined by its vertices, check the letters and case in the triangle № ${index}`,
            };
        }

        if (keyOne === element[name][0] || keyTwo === element[name][1] || keyThree === element[name][2]) {
            return {
                status: 'failed',
                reason: `Points and sides must be different register. Check triangle № ${index}`,
            };
        }

        if (
            typeof element[keyOne] !== 'number'
            || typeof element[keyTwo] !== 'number'
            || typeof element[keyThree] !== 'number'
        ) {
            return {
                status: 'failed',
                reason: `The lengths of the parties must be numbers. Check the sides of the triangle: ${vertices}`,
            };
        }
    }
    return false;
}

export default checkParameters;
