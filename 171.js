/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let expo = 0;
  let result = 0;
  const len = columnTitle.length;
  for (let i = len - 1; i >= 0; i--) {
    const char = columnTitle[i];
    result += (char.charCodeAt(0) - "A".charCodeAt(0) + 1) * Math.pow(26, expo);
    expo++;
  }
  return result;
};

const columnTitle = "AAA";
console.log(titleToNumber(columnTitle));
