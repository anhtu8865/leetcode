/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const dic = sort(createDic(s));
  const dic2 = sort(createDic(t));
  return JSON.stringify(dic) === JSON.stringify(dic2);
};

const createDic = (s) => {
  const dic = {};
  for (let ch of s) {
    if (dic[ch]) dic[ch]++;
    else dic[ch] = 1;
  }
  return dic;
};

const sort = (dic) => {
  let keys = Object.keys(dic);
  keys.sort();
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result[key] = dic[key];
  }
  return result;
};

const s = "rat",
  t = "car";

console.log(isAnagram(s, t));
