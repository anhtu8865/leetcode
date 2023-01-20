//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const length = nums.length;
  if (length === 0) return null;
  const mid = Math.floor(length / 2);
  return new TreeNode(
    nums[mid],
    sortedArrayToBST(nums.slice(0, mid)),
    sortedArrayToBST(nums.slice(mid + 1, length))
  );
};

const nums = [-10, -3, 0, 5, 9];
const head = sortedArrayToBST(nums);

const traverse = function (node) {
  if (node === null) return;
  traverse(node.left);
  console.log(node.val);
  traverse(node.right);
};

traverse(head);
