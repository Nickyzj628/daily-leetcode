/**
 * 滑动窗口最大值
 * @param {number[]} nums
 * @param {number} k
 */
function maxSlidingWindow(nums, k) {
	// 经典的单调队列题
	const answer = []
	const queue = [] // 队列里存放下标，便于维护队列长度
	for (let [i, num] of nums.entries()) {
		// 出队，队首元素始终是最大的
		while (queue.length > 0 && nums[queue.at(-1)] <= num) queue.pop()
		// 入队
		queue.push(i)
		// 出队，队列始终维护k个元素
		if (i - queue[0] >= k) queue.shift()
		// 更新答案
		if (i >= k - 1) answer.push(nums[queue[0]])
	}
	return answer
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)) // [3,3,5,5,6,7]
