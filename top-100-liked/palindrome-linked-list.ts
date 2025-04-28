/**
 * 234. 回文链表
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * https://leetcode.cn/problems/palindrome-linked-list/description/?envType=study-plan-v2&envId=top-100-liked
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let head2: ListNode | null = null;

  // 找到中间节点
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  head2 = slow;

  // 反转后半节点
  let prev: ListNode | null = null;
  let curr = head2;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head2 = prev;

  // 对比前后两段节点
  while (head2 !== null) {
    if (head!.val !== head2.val) {
      return false;
    }
    head = head!.next;
    head2 = head2.next;
  }
  return true;
};

// true
let head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(head));