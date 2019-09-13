export function getFibonacci(initialObject) {
  if ({}.hasOwnProperty.call(initialObject, 'length')) {
    return getFibonacciSeries(initialObject);
  }
  return getFibonacciMinMax(initialObject);
}

export function getFibonacciSeries(initialObject) {
  const series = initialObject.length;
  const newArray = [0, 1];

  if (series === 0) {
    return [];
  }

  if (series === 1) {
    return [0];
  }

  for (let i = 2; i < series; i++) {
    newArray.push(newArray[i - 1] + newArray[i - 2]);
  }
  return newArray;
}

export function getFibonacciMinMax(initialObject) {
  const { min, max } = initialObject;
  const newArray = [];

  for (let i = 0, sum = 1; sum <= max; sum += i, i = sum - i) {
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

// console.log(getFibonacci(context));
