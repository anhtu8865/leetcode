/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      let num = 1;
      if (j !== 0 && j !== i) num = triangle[i - 1][j - 1] + triangle[i - 1][j];
      row.push(num);
    }
    triangle.push(row);
    console.log(row);
  }
  return triangle;
};
generate(1);
