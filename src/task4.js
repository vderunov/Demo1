const palindrome = function getPalindrome(initValue) {
  let initVal = initValue;
  let arrOfPalindromes = [];
  const minPalindromeLength = 2;

  if (initVal.length < minPalindromeLength) {
    return;
  }

  const reversedStr = initVal
    .split('')
    .reverse()
    .join('');

  if (initVal === reversedStr) {
    return parseInt(initVal, 10);
  }

  if (initVal[0] === initVal[initVal.length - 1] && initVal !== reversedStr) {
    initVal = initVal.slice(0, initVal.length - 1);
  }

  for (let i = 0; i < initVal.length; i += 1) {
    for (let j = initVal.length - 1; j > i; j -= 1) {
      if (initVal[i] === initVal[j]) {
        arrOfPalindromes.push(getPalindrome(initVal.slice(i, j + 1)));
      }
    }
  }

  // extract nested arrays
  arrOfPalindromes = flatten(arrOfPalindromes);

  if (arrOfPalindromes.length === 0) {
    return 0;
  }

  return Math.max(...arrOfPalindromes);
};

function flatten(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce(
      (accumulator, currentValue) => accumulator.concat(flatten(currentValue)),
      []
    );
  }
  return arr;
}

export default palindrome;
