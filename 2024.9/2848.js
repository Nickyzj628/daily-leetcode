// 2848. 与车相交的点
// https://leetcode.cn/problems/points-that-intersect-with-cars/

// 给你一个下标从 0 开始的二维整数数组 nums 表示汽车停放在数轴上的坐标。对于任意下标 i，nums[i] = [starti, endi] ，其中 starti 是第 i 辆车的起点，endi 是第 i 辆车的终点。
// 返回数轴上被车 任意部分 覆盖的整数点的数目。

/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
	// 合并区间(56题)
	let answer = 0
	nums.sort((a, b) => a[0] - b[0])
	const merged = [nums[0]]
	for (let i = 1; i < nums.length; i++) {
		// 正在合并的区间a
		const merging = merged.at(-1)
		// 当前区间b
		const interval = nums[i]
		// b在a里面，合并
		if (interval[0] <= merging[1]) {
			// 可能需要修改区间终点
			merging[1] = Math.max(merging[1], interval[1])
		}
		// 新区间
		else {
			merged.push(interval)
		}
	}
	// 计算差值
	for (let i = 0; i < merged.length; i++) {
		answer += merged[i][1] - merged[i][0] + 1
	}
	return answer

	// Set去重
	// const arr = []
	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = nums[i][0]; j <= nums[i][1]; j++) {
	// 		arr.push(j)
	// 	}
	// }
	// return new Set(arr).size
}

console.log(
	numberOfPoints([
		[3, 6],
		[1, 5],
		[4, 7],
	])
) // 7
