// 2398. 预算内的最多机器人数目
// https://leetcode.cn/problems/maximum-number-of-robots-within-budget/

// 你有 n 个机器人，给你两个下标从 0 开始的整数数组 chargeTimes 和 runningCosts ，两者长度都为 n 。第 i 个机器人充电时间为 chargeTimes[i] 单位时间，花费 runningCosts[i] 单位时间运行。再给你一个整数 budget 。
// 运行 k 个机器人 总开销 是 max(chargeTimes) + k * sum(runningCosts) ，其中 max(chargeTimes) 是这 k 个机器人中最大充电时间，sum(runningCosts) 是这 k 个机器人的运行时间之和。
// 请你返回在 不超过 budget 的前提下，你 最多 可以 连续 运行的机器人数目为多少。

/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function (chargeTimes, runningCosts, budget) {
	// 求滑动窗口最大值，用单调队列，类似../essentials/maxSlidingWindow.js
	// 窗口长度不固定，枚举右端点，维护左端点
	let answer = 0
	const queue = []
	let head = 0
	let tail = 0
	let totalCost = 0
	for (let left = 0, right = 0; right < chargeTimes.length; right++) {
		// 出队，保证队列是递减的   
		while (head < tail && chargeTimes[queue[tail - 1]] <= chargeTimes[right]) tail--
		// 入队
		queue[tail++] = right
		totalCost += runningCosts[right]
		// 出队，总开销不能超过budget
		while (head < tail && chargeTimes[queue[head]] + (right - left + 1) * totalCost > budget) {
			if (queue[head] === left) head++
			totalCost -= runningCosts[left++]
		}
		// 更新答案
		answer = Math.max(answer, right - left + 1)
	}
	return answer
}

// 选择前 3 个机器人，可以得到答案最大值 3 。总开销是 max(3,6,1) + 3 * sum(2,1,3) = 6 + 3 * 6 = 24 ，小于 25 。
console.log(maximumRobots([3, 6, 1, 3, 4], [2, 1, 3, 4, 5], 25)) // 3
