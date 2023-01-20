/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const dic = {};
  for (let i in s) {
    const ch = s[i];
    if (dic[ch]) dic[ch] = -1;
    else dic[ch] = i;
  }
  for (const key in dic) {
    if (dic[key] !== -1) return dic[key];
  }
  return -1;
};
