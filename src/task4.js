import { checkParameters } from './components/checkParamTask4.js';

export function getPalindrome(initialNumber) {
    let initialStr = String(initialNumber);
    let arrOfPalindromes = [];
    const minPalindromeLength = 2;

    const parameterError = checkParameters(initialNumber);

    if (parameterError) {
        return parameterError;
    }

    if (initialStr.length < minPalindromeLength) {
        return;
    }

    const reversedStr = initialStr
        .split('')
        .reverse()
        .join('');

    if (initialStr === reversedStr) {
        return +initialStr;
    }

    if (initialStr[0] === initialStr[initialStr.length - 1] && initialStr !== reversedStr) {
        initialStr = initialStr.slice(0, initialStr.length - 1);
    }

    for (let i = 0; i < initialStr.length; i++) {
        for (let j = initialStr.length - 1; j > i; j--) {
            if (initialStr[i] === initialStr[j]) {
                arrOfPalindromes.push(getPalindrome(initialStr.slice(i, j + 1)));
            }
        }
    }

    // extract nested arrays
    arrOfPalindromes = flatten(arrOfPalindromes);

    if (arrOfPalindromes.length === 0) {
        return 0;
    }
    return Math.max(...arrOfPalindromes);
}

function flatten(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((accumulator, currentValue) => accumulator.concat(flatten(currentValue)), []);
    }
    return arr;
}

export default getPalindrome;

// console.log(getPalindrome('1234437'));
// console.log(getPalindrome(12344371));
// console.log(getPalindrome(200212344371));
// console.log(getPalindrome(3443));
// console.log(getPalindrome(123456789));
// console.log(getPalindrome(645345543900));
