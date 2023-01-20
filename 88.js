/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let mi = 0,
    ni = 0,
    i = 0;
  const newNums1 = [...nums1];
  while (i < m + n) {
    let num1;
    if (mi < m) {
      num1 = newNums1[mi];
    }
    let num2;
    if (ni < n) {
      num2 = nums2[ni];
    }
    if (num1 !== undefined && num2 !== undefined) {
      if (num1 < num2) {
        nums1[i] = num1;
        mi++;
      } else {
        nums1[i] = num2;
        ni++;
      }
    } else if (num1 === undefined) {
      nums1[i] = num2;
      ni++;
    } else if (num2 === undefined) {
      nums1[i] = num1;
      mi++;
    }
    i++;
  }
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
