/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const maxLoop = 1000;
  for (let i = 0; n < Number.MAX_VALUE; i++) {
    if (i > maxLoop) return false;
    n = step(n);
    if (n === 1) return true;
  }
  return false;
};

const step = (n) => {
  const str = n.toString();
  let result = 0;
  for (const ch of str) {
    const num = Math.pow(Number(ch), 2);
    result += num;
  }
  return result;
};

const n = 2;
console.log(isHappy(n));
