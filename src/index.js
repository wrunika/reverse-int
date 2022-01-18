module.exports = function reverse (n) {
  let str = String(Math.abs(n));
  let i = 0;
  let result = '';

  while (i < str.length) {
    result = `${str[i]}${result}`;
    i = i + 1;
  }
  return +result;
};
