/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 1) return false;
  const a = Math.log10(n);
  const b = Math.log10(3);
  const num = a / b;
  return num - Math.floor(num) === 0;
};

console.log();
