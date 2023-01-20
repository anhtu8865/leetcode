/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;
  let str = "";
  while (n > 0) {
    const remainder = n % 2;
    n = Math.floor(n / 2);
    str = remainder + str;
  }
  while (str.length < 32) {
    str = "0" + str;
  }
  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]) * Math.pow(2, i);
  }
  return result;
};

const num = 43261596;
console.log(reverseBits(num));
