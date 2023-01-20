/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  let result = 1;
  for (let i = 1; i < Number.MAX_VALUE; i++) {
    if (i * i > x) break;
    result = i;
  }
  return result;
};

const x = 9;
console.log(mySqrt(x));
