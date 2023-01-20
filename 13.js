/**
 * @param {string} s
 * @return {number}
 */

/**
 *
 *
 */

var romanToInt = function (s) {
  const dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let pre = 0,
    cur,
    result = 0;
  for (let char of s) {
    cur = dic[char];
    if (cur <= pre) result += cur;
    else result = result - 2 * pre + cur;
    pre = cur;
  }
  return result;
};

const s = "MCMXCIV";
console.log(romanToInt(s));
