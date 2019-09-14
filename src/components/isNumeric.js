const isNum = function isNumeric(n) {
  return !Number.isNaN(parseFloat(n) && Number.isFinite(n));
};

export default isNum;
