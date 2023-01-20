/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = "";
  for (const ch of s.toLowerCase()) {
    if ("a" <= ch && ch <= "z") str += ch;
    if ("0" <= ch && ch <= "9") str += ch;
  }
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

const s = "0P";

console.log(isPalindrome(s));
