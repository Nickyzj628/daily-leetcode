// 2332. 坐上公交的最晚时间
// https://leetcode.cn/problems/the-latest-time-to-catch-a-bus/

// 给你一个下标从 0 开始长度为 n 的整数数组 buses ，其中 buses[i] 表示第 i 辆公交车的出发时间。同时给你一个下标从 0 开始长度为 m 的整数数组 passengers ，其中 passengers[j] 表示第 j 位乘客的到达时间。所有公交车出发的时间互不相同，所有乘客到达的时间也互不相同。
// 给你一个整数 capacity ，表示每辆公交车 最多 能容纳的乘客数目。
// 每位乘客都会搭乘下一辆有座位的公交车。如果你在 y 时刻到达，公交在 x 时刻出发，满足 y <= x  且公交没有满，那么你可以搭乘这一辆公交。最早 到达的乘客优先上车。
// 返回你可以搭乘公交车的最晚到达公交站时间。你 不能 跟别的乘客同时刻到达。
// 注意：数组 buses 和 passengers 不一定是有序的。

/**
 * 排序 + 双指针
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
var latestTimeCatchTheBus = function (buses, passengers, capacity) {
	// [10,20,30]
	buses.sort((a, b) => a - b)
	// [4,11,13,19,21,25,26]
	passengers.sort((a, b) => a - b)

	// 乘客上车
	let c = 0
	let p = 0
	for (let bus of buses) {
		c = 0
		while (c < capacity && p < passengers.length) {
			if (passengers[p] > bus) break
			p++
			c++
		}
	}
	p--

	// p是最后一个上车的乘客，如果车会坐满，就和他插队，否则就赶在最后一辆车到达时上车
	let answer = c === capacity ? passengers[p] : buses.at(-1)
	while (answer === passengers[p]) {
		answer--
		p--
	}
	return answer
}

// 第 1 辆公交车载着第 1 位乘客。
// 第 2 辆公交车载着你和第 2 位乘客。
// 注意你不能跟其他乘客同一时间到达，所以你必须在第二位乘客之前到达。
console.log(latestTimeCatchTheBus([10, 20], [2, 17, 18, 19], 2)) // 16
console.log(latestTimeCatchTheBus([20, 30, 10], [19, 13, 26, 4, 25, 11, 21], 2)) // 20
console.log(latestTimeCatchTheBus([3], [2, 4], 2)) // 3
console.log(latestTimeCatchTheBus([2], [2], 2)) // 1
