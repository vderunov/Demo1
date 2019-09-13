export default function numericSequence(rowLength, minAmountExponent) {
  const arrNumbers = [];
  let base;
  let i = 0;

  do {
    base = i ** 2;

    if (base >= minAmountExponent) {
      arrNumbers.push(i);
    }

    i++;
  } while (arrNumbers.length < rowLength);

  return arrNumbers.join(', ');
}
