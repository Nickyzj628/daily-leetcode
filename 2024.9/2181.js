// 2181. 合并零之间的节点
// https://leetcode.cn/problems/merge-nodes-in-between-zeros/

// 给你一个链表的头节点 head ，该链表包含由 0 分隔开的一连串整数。链表的 开端 和 末尾 的节点都满足 Node.val == 0 。
// 对于每两个相邻的 0 ，请你将它们之间的所有节点合并成一个节点，其值是所有已合并节点的值之和。然后将所有 0 移除，修改后的链表不应该含有任何 0 。
// 返回修改后链表的头节点 head 。

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    // 原地遍历
    let tail = head
    for (let curr = head.next; curr.next; curr = curr.next) {
        if (curr.val) {
            tail.val += curr.val
        } else {
            tail = tail.next
            tail.val = 0
        }
    }
    tail.next = null
    return head
}

// [0,3,1,0,4,5,2,0] => [4,11]
const node = new ListNode(0, new ListNode(3, new ListNode(1, new ListNode(0, new ListNode(4, new ListNode(5, new ListNode(2, new ListNode(0))))))))
console.log(mergeNodes(node))
