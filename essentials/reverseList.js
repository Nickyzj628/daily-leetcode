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
	while (curr) {
		let next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}
	return prev
}

/**
 * 反转链表II
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @returns {ListNode}
 */
function reverseBetween(head, left, right) {
	// 用于记录头节点
	const dummy = new ListNode(0, head)

	// 用于记录前一个未反转的节点
	let p0 = dummy
	for (let i = 0; i < left - 1; i++) {
		p0 = p0.next
	}

	// 反转链表
	let prev = null
	let curr = p0.next
	for (let i = 0; i < right - left + 1; i++) {
		let next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}

	// 修正节点指向
	p0.next.next = curr
	p0.next = prev

	return dummy.next
}

/**
 * K个一组翻转链表
 * @param {ListNode} head
 * @param {number} k
 */
function reverseKGroup(head, k) {
	// 求出链表长度
	let length = 0
	for (let curr = head; curr; curr = curr.next) {
		length++
	}

	// 反转链表II
	const dummy = new ListNode(0, head)
	let p0 = dummy
	while (length >= k) {
		// 反转链表
		let prev = null
		let curr = p0.next
		let next = null
		for (let i = 0; i < k; i++) {
			next = curr.next
			curr.next = prev
			prev = curr
			curr = next
		}
		// 修正节点指向
		next = p0.next
		p0.next.next = curr
		p0.next = prev
		p0 = next
		length -= k
	}

	return dummy.next
}

const newList = () => new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
// console.log(JSON.stringify(reverseList(newList()), null, 3)) // [5,4,3,2,1]
// console.log(JSON.stringify(reverseBetween(newList(), 2, 4), null, 3)) // [1,4,3,2,5]
console.log(JSON.stringify(reverseKGroup(newList(), 2), null, 3)) // [2,1,4,3,5]
