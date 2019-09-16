export default function flatten(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((acc, cur) => acc.concat(flatten(cur)), []);
  }

  return arr;
}
