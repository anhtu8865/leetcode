/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  let pre = -101;
  for (const i in nums) {
    const num = nums[i];
    if (num !== pre) {
      nums[count] = num;
      count++;
      pre = num;
    }
  }
  return count;
  // let i = 0;
  // for (let j = 0; j < nums.length; j++) {
  //   if (nums[j] != nums[i]) nums[++i] = nums[j];
  // }
  // return ++i;
};

const nums = [1, 1, 2];
console.log(removeDuplicates(nums));
console.log("🚀 ~ file: 26.js:25 ~ nums", nums);
