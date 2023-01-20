/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const j = len - 1 - i;
    if (i >= j) return;
    const tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;
  }
};

const s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
