'use strict';

import { checkParameters } from './components/checkParamTask2.js';

export function analyzeEnvelopes(envelopeA, envelopeB) {
    let parameterError, diagonal, radius, halfWidthA, halfHeightA, cat1, cat2, catLittle1, catLittle2, hypotenuse;

    if (envelopeB.height < envelopeA.height && envelopeB.width < envelopeA.width) {
        return 0;
    }

    parameterError = checkParameters(envelopeA, envelopeB);

    if (parameterError) {
        return parameterError;
    }

    diagonal = Math.sqrt(Math.pow(envelopeB.width, 2) + Math.pow(envelopeB.height, 2));

    radius = diagonal / 2;

    halfWidthA = envelopeA.width / 2;
    halfHeightA = envelopeA.height / 2;

    cat1 = Math.sqrt(Math.pow(radius, 2) - Math.pow(halfWidthA, 2));
    cat2 = Math.sqrt(Math.pow(radius, 2) - Math.pow(halfHeightA, 2));

    catLittle1 = (envelopeA.height - cat1 * 2) / 2;
    catLittle2 = (envelopeA.width - cat2 * 2) / 2;

    hypotenuse = Math.sqrt(Math.pow(catLittle1, 2) + Math.pow(catLittle2, 2));

    return 'Margin: ', hypotenuse - envelopeB.height;
}

// let envelopeA = {
//     width: 9,
//     height: 5,
// };

// let envelopeB = {
//     width: 9.49,
//     height: 1,
// };

// console.log(analyzeEnvelopes(envelopeA, envelopeB));
