/**
 * 21. 合并两个有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/?envType=study-plan-v2&envId=top-100-liked
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list3 = new ListNode(0);
    const head3 = list3;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            list3.next = list1;
            list1 = list1.next;
        } else {
            list3.next = list2;
            list2 = list2.next;
        }
        list3 = list3.next;
    }

    if (list1 !== null) {
        list3.next = list1;
    } else {
        list3.next = list2;
    }

    return head3.next;
};

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// [1,1,2,3,4,4]
console.log(mergeTwoLists(list1, list2));