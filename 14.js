/**
 * strs = ["flower","flow","flight"]
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonStr = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    if (str === "") commonStr = str;
    for (let j = 0; j < str.length; j++) {
      if (commonStr[j] !== str[j]) {
        commonStr = str.slice(0, j);
        break;
      }
      if (j === str.length - 1) {
        commonStr = str;
      }
    }
  }
  return commonStr;
};

const strs = ["abab", "aba", ""];

console.log(longestCommonPrefix(strs));
