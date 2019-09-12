import { checkParameters } from './components/checkParamTask2.js';

export function analyzeEnvelopes(envelopeA, envelopeB) {
    if (envelopeB.height < envelopeA.height && envelopeB.width < envelopeA.width) {
        return 0;
    }

    const parameterError = checkParameters(envelopeA, envelopeB);

    if (parameterError) {
        return parameterError;
    }

    const diagonal = Math.sqrt(envelopeB.width ** 2 + envelopeB.height ** 2);

    const radius = diagonal / 2;

    const halfWidthA = envelopeA.width / 2;
    const halfHeightA = envelopeA.height / 2;

    const cat1 = Math.sqrt(radius ** 2 - halfWidthA ** 2);
    const cat2 = Math.sqrt(radius ** 2 - halfHeightA ** 2);

    const catLittle1 = (envelopeA.height - cat1 * 2) / 2;
    const catLittle2 = (envelopeA.width - cat2 * 2) / 2;

    const hypotenuse = Math.sqrt(catLittle1 ** 2 + catLittle2 ** 2);

    return 'Margin: ', hypotenuse - envelopeB.height;
}

export default analyzeEnvelopes;

// const envelopeA = {
//     width: 9,
//     height: 5,
// };

// const envelopeB = {
//     width: 9.49,
//     height: 1,
// };

// console.log(analyzeEnvelopes(envelopeA, envelopeB));
