export default function getPalindrome(initValue) {
  let arrOfPalindromes = [];
  const minPalindromeLength = 2;

  if (initValue.length < minPalindromeLength) {
    return;
  }

  const reversedStr = initValue
    .split('')
    .reverse()
    .join('');

  if (initValue === reversedStr) {
    return +initValue;
  }

  if (initValue[0] === initValue[initValue.length - 1] && initValue !== reversedStr) {
    initValue = initValue.slice(0, initValue.length - 1);
  }

  for (let i = 0; i < initValue.length; i++) {
    for (let j = initValue.length - 1; j > i; j--) {
      if (initValue[i] === initValue[j]) {
        arrOfPalindromes.push(getPalindrome(initValue.slice(i, j + 1)));
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
