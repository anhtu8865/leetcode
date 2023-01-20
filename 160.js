// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {};

const printReverse = (head) => {
  if (!head) return;
  printReverse(head.next);
  console.log(head.val);
};

const reverseList = (head) => {
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  head = pre;
  return head;
};

const createList = (list) => {
  let head = null;
  const len = list.length;
  if (len === 0) return head;
  let cur;
  for (let i in list) {
    const node = new ListNode(list[i]);
    if (i === "0") {
      head = node;
      cur = head;
    } else {
      cur.next = node;
      cur = node;
    }
  }
  return head;
};

const traversal = (node) => {
  while (node !== null) {
    console.log(node.val);
    node = node.next;
  }
};

const listA = [4, 1, 8, 4, 5];
const headA = createList(listA);
const listB = [5, 6, 1, 8, 4, 5];
const createSecondList = (headA, val, list) => {
  let head = null;
  const len = list.length;
  if (len === 0) return head;
  let curB;
  for (let i in list) {
    if (list[i] === val) break;
    const node = new ListNode(list[i]);
    if (i === "0") {
      head = node;
      curB = head;
    } else {
      curB.next = node;
      curB = node;
    }
  }
  while (headA) {
    if (headA.val === val) {
      curB.next = headA;
      break;
    }
    headA = headA.next;
  }
  return head;
};
const headB = createSecondList(headA, 8, listB);
// traversal(headA);
// traversal(headB);
getIntersectionNode(headA, headB);
traversal(headA);
printReverse(headA);
