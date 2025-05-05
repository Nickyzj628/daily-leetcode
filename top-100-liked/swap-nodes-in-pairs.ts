/**
 * 24. 两两交换链表中的节点
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * https://leetcode.cn/problems/swap-nodes-in-pairs/description/?envType=study-plan-v2&envId=top-100-liked
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

    function swapPairs(head: ListNode | null): ListNode | null {
        const dummy = new ListNode(0, head);

        let a = dummy;
        let b = dummy.next;

        while (b && b.next) {
            let c = b.next;
            let d = c.next;

            a.next = c;
            b.next = d;
            c.next = b;

            a = b;
            b = d;
        }

        return dummy.next;
    };

    // [2,1,4,3]
    let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
    console.log(JSON.stringify(swapPairs(head), null, 3));
}