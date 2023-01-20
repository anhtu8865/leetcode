/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let str = "";
  while (n > 0) {
    const remainder = n % 2;
    n = Math.floor(n / 2);
    str = remainder + str;
  }
  let count = 0;
  for (const ch of str) {
    if (ch === "1") count++;
  }
  return count;
};

const num = 11;
console.log(hammingWeight(num));
