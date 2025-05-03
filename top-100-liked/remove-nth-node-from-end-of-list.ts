/**
 * 19. 删除链表的倒数第 N 个结点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan-v2&envId=top-100-liked
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 快慢指针
    const dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = dummy;

    // 快指针先移动n步
    for (let i = 0; i < n; i++) {
        fast = fast?.next;
    }

    // 快慢指针一起移动，最终慢指针的下一个节点就是倒数第n个节点
    while (fast?.next) {
        slow = slow!.next;
        fast = fast.next;
    }
    slow!.next = slow!.next.next;

    return dummy.next;
};

// [1,2,3,5]
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(JSON.stringify(removeNthFromEnd(head, 2), null, 3));

// []
head = new ListNode(1);
console.log(JSON.stringify(removeNthFromEnd(head, 1), null, 3));
