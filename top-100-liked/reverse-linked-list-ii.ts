/**
 * 92. 反转链表 II
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * https://leetcode.cn/problems/reverse-linked-list-ii/description/
 */

{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }
    }

    function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
        // 用哨兵节点避开left=1的边界情况
        const dummy = new ListNode(0, head);

        // 来到要反转的上一个节点
        let beforeReverse = dummy;
        for (let i = 0; i < left - 1; i++) {
            beforeReverse = beforeReverse.next!;
        }

        // 最终想要的：
        // 1. beforeReverse.next.next = 反转后的下一个节点
        // 2. beforeReverse.next = 反转结束时的最后一个节点
        let prev: ListNode | null = null;
        let curr = beforeReverse.next;
        for (let i = 0; i < right - left + 1; i++) {
            const next = curr!.next;
            curr!.next = prev;
            prev = curr;
            curr = next;
        }
        beforeReverse.next!.next = curr;
        beforeReverse.next = prev;

        return dummy.next;
    };

    // [1,4,3,2,5]
    let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    console.log(JSON.stringify(reverseBetween(head, 2, 4), null, 3));
}