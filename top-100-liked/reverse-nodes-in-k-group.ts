/**
 * 25. K 个一组翻转链表
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/description/?envType=study-plan-v2&envId=top-100-liked
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

    function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
        // 在反转节点II的基础上，嵌套一层从0到k的循环，每次循环结束都要更新beforeReverse指针

        // 先求出链表长度，用来判断在哪结束循环
        let size = 0;
        let node = head;
        while (node !== null) {
            node = node.next;
            size++;
        }

        const dummy = new ListNode(0, head);
        let beforeReverse = dummy;

        // 做size/k次反转链表II
        for (let i = 0; i < Math.floor(size / k); i++) {
            let prev: ListNode | null = null;
            let curr = beforeReverse.next;
            for (let j = 0; j < k; j++) {
                const next = curr!.next;
                curr!.next = prev;
                prev = curr;
                curr = next;
            }
            const next = beforeReverse.next;
            beforeReverse.next!.next = curr;
            beforeReverse.next = prev;

            // 每次循环结束时，更新beforeReverse到下次反转的前一个节点
            beforeReverse = next!;
        }

        return dummy.next;
    };

    // [2,1,4,3,5]
    let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    console.log(JSON.stringify(reverseKGroup(head, 2), null, 3));
}