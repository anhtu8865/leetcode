/**
[1,2,3,8,9], 5 ⇒ [1,2]

the storage problem: use a dictionary

loop through array:

- Check condition success ⇒ return
- Add new element to dictionary
 */
function twoSum(nums, target) {
  const dic = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remain = target - num;
    if (dic[remain] !== undefined) return [i, dic[remain]];
    dic[num] = i;
  }
}

const nums = [2, 7, 15, 9];
const target = 9;

console.log(twoSum(nums, target));
