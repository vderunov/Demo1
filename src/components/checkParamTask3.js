import isNumeric from './isNumeric.js';

export function checkParameters(arrTriangles) {
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

  for (let i = 0; i < arrTriangles.length; i++) {
    const [vertices, a, b, c] = Object.values(arrTriangles[i]);

    if (typeof arrTriangles[i] !== 'object') {
      return {
        status: 'failed',
        reason: 'Array elements must be objects with properties',
      };
    }

    if (Object.entries(arrTriangles[i]).length === 0) {
      return {
        status: 'failed',
        reason: 'Object is empty, enter properties',
      };
    }

    if (!isNumeric(a) || !isNumeric(b) || !isNumeric(c)) {
      return {
        status: 'failed',
        reason: 'The sides of the triangle must be numbers',
      };
    }

    if (vertices === '') {
      return {
        status: 'failed',
        reason: 'Pick the vertices of the triangle',
      };
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      return {
        status: 'failed',
        reason: 'Triangle does not exist. Check side sizes',
      };
    }

    const [name, keyOne, keyTwo, keyThree] = Object.keys(arrTriangles[i]);

    if (
      keyOne.toUpperCase() !== arrTriangles[i][name][0]
      || keyTwo.toUpperCase() !== arrTriangles[i][name][1]
      || keyThree.toUpperCase() !== arrTriangles[i][name][2]
    ) {
      return {
        status: 'failed',
        reason: 'A triangle is defined by its vertices, check the letters and case',
      };
    }

    if (
      keyOne === arrTriangles[i][name][0]
      || keyTwo === arrTriangles[i][name][1]
      || keyThree === arrTriangles[i][name][2]
    ) {
      return {
        status: 'failed',
        reason: 'Vertices and sides must be different register',
      };
    }

    if (
      typeof arrTriangles[i][keyOne] !== 'number'
      || typeof arrTriangles[i][keyTwo] !== 'number'
      || typeof arrTriangles[i][keyThree] !== 'number'
    ) {
      return {
        status: 'failed',
        reason: 'The lengths of the parties must be numbers',
      };
    }
  }
  return false;
}

export default checkParameters;
