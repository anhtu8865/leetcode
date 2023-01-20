/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const dic = {};
  for (const num of nums) {
    if (dic[num]) return true;
    dic[num] = 1;
  }
  return false;
};

const nums = [1, 2, 3, 3];
console.log(containsDuplicate(nums));
