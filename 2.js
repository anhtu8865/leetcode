function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l1Val = reverseStr(traverseListNode(l1));
  const l2Val = reverseStr(traverseListNode(l2));
  const val = reverseStr(addTwoString(l1Val, l2Val));
  const arr = makeArr(val);
  return makeListNode(arr);
};

function addTwoString(l1, l2) {
  const len1 = l1.length;
  const len2 = l2.length;
  const len = len1 > len2 ? len1 : len2;
  let remember = "0";
  let sumStr = "";
  for (let i = len - 1; i >= 0; i--) {
    let digit1 = "0";
    if (len1 >= len) digit1 = l1[i];
    else {
      const index = len1 - (len2 - 1 - i);
      if (index >= 0) digit1 = l1[index];
    }
    let digit2 = "0";
    if (len2 >= len) digit2 = l2[i];
    else {
      const index = len2 - (len1 - 1 - i) - 1;
      if (index >= 0) digit2 = l2[index];
    }
    const sum = (Number(digit1) + Number(digit2) + Number(remember)).toString();
    remember = "0";
    const lenSum = sum.length;
    if (lenSum > 1) remember = "1";
    sumStr += sum[lenSum - 1];
  }
  if (remember === "1") sumStr += "1";
  return reverseStr(sumStr);
}

function makeArr(str) {
  const len = str.length;
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Number(str[i]));
  }
  return arr;
}

function reverseStr(str) {
  let newStr = "";
  const len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function addTwoStrs(str1, str2) {}

function makeListNode(arr) {
  const head = new ListNode();
  let cur = head;
  for (const i in arr) {
    const node = new ListNode(arr[i], null);
    cur.next = node;
    cur = node;
  }
  return head.next;
}

function traverseListNode(listNode) {
  let result = "";
  const head = listNode;
  let cur = head;
  while (cur) {
    result += cur.val;
    cur = cur.next;
  }
  return result;
}

function printListNode(listNode) {
  console.log(
    `val: ${listNode.val}, next val: ${
      listNode.next ? listNode.next.val : listNode.next
    }`
  );
}
const l1 = makeListNode([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
const l2 = makeListNode([5, 6, 4]);
console.log(addTwoNumbers(l1, l2));
