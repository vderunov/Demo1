import { checkParameters } from './components/checkParamTask6.js';

export function numericSequence(rowLength, minAmountExponent) {
    const arrNumbers = [];
    let base;
    let i = 0;

    const parameterError = checkParameters(rowLength, minAmountExponent);

    if (parameterError) {
        return parameterError;
    }

    do {
        base = i ** 2;

        if (base >= minAmountExponent) {
            arrNumbers.push(i);
        }

        i++;
    } while (arrNumbers.length < rowLength);

    return arrNumbers.join(', ');
}

export default numericSequence;

// console.log(numericSequence(5, 36));
