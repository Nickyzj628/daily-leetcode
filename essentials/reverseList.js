class ListNode {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}

/**
 * 反转链表
 * @param {ListNode} head
 */
function reverseList(head) {
	let prev = null
	let curr = head
	while (curr !== null) {
		const { next } = curr
		curr.next = prev
		prev = curr
		curr = next
	}
	return prev
}

// 3->2->1
const list = new ListNode(1, new ListNode(2, new ListNode(3)))
console.log(reverseList(list))
