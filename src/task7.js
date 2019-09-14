export { getFibonacci, getFibonacciSeries, getFibonacciMinMax };

function getFibonacciSeries(initialObject) {
  const series = initialObject.length;
  const newArray = [0, 1];

  if (series === 0) {
    return [];
  }

  if (series === 1) {
    return [0];
  }

  for (let i = 2; i < series; i += 1) {
    newArray.push(newArray[i - 1] + newArray[i - 2]);
  }

  return newArray;
}

function getFibonacciMinMax(initialObject) {
  const { min, max } = initialObject;
  const newArray = [];

  for (let i = 0, sum = 1; sum <= max; sum += i, i = sum - i) {
    if (sum >= min) {
      newArray.push(sum);
    }
  }

  return newArray;
}

function getFibonacci(initialObject) {
  if ({}.hasOwnProperty.call(initialObject, 'length')) {
    return getFibonacciSeries(initialObject);
  }

  return getFibonacciMinMax(initialObject);
}
