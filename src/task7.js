'use strict';

import { checkParameters } from './components/checkParamTask7.js';

export function fibonacci(initialObject) {
    let parameterError;

    parameterError = checkParameters(initialObject);

    if (parameterError) {
        return parameterError;
    }

    if (initialObject.hasOwnProperty('length')) {
        return getFibonacciSeries(initialObject);
    } else {
        return getFibonacciMinMax(initialObject);
    }
}

export function getFibonacciSeries(initialObject) {
    let series = initialObject.length,
        newArray = [0, 1],
        i;

    if (series === 0) {
        return [];
    }

    if (series === 1) {
        return [0];
    }

    for (i = 2; i < series; i++) {
        newArray.push(newArray[i - 1] + newArray[i - 2]);
    }
    return newArray;
}

export function getFibonacciMinMax(initialObject) {
    let { min, max } = initialObject,
        newArray = [],
        sum,
        i;

    for (i = 0, sum = 1; sum <= max; sum += i, i = sum - i) {
        if (sum >= min) {
            newArray.push(sum);
        }
    }
    return newArray;
}

// const context = {
//     min: 5,
//     max: 35,
// };

// const context = {
//     length: 7,
// };

// console.log(fibonacci(context));
