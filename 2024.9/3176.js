// 3176. 求出最长好子序列 I
// https://leetcode.cn/problems/find-the-maximum-length-of-a-good-subsequence-i/

// 给你一个整数数组 nums 和一个 非负 整数 k 。如果一个整数序列 seq 满足在范围下标范围 [0, seq.length - 2] 中存在 不超过 k 个下标 i 满足 seq[i] != seq[i + 1] ，那么我们称这个整数序列为 好 序列。
// 请你返回 nums 中好子序列的最长长度

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
	// DP，阅读理解题，找状态，求状态转移方程
	// 子序列：允许去除某些元素，但不改变元素顺序
	// dp[i]: 到i为止的子序列 (0<=i<nums.length)
	// dp[i][count]: 到i为止的子序列，并且不能有count个以上不相等的相邻元素 (0<=count<=k)
	// 枚举i，再依次求i和0~i-1之间满足0~k的好子序列
	// return Math.max(dp[i][k])
	let answer = 1
	const dp = Array.from({ length: nums.length }, () => new Array(k + 1).fill(1))
	for (let i = 1; i < nums.length; i++) {
		for (let count = 0; count <= k; count++) {
			for (let j = 0; j < i; j++) {
				if (nums[j] === nums[i]) dp[i][count] = Math.max(dp[i][count], dp[j][count] + 1)
				else if (count > 0) dp[i][count] = Math.max(dp[i][count], dp[j][count - 1] + 1)
			}
		}
		answer = Math.max(answer, dp[i][k])
	}
	return answer
}

// 最长好子序列为 [1,2,1,1]
console.log(maximumLength([1, 2, 1, 1, 3], 2)) // 4

// 最长好子序列为 [1,1]
console.log(maximumLength([1, 2, 3, 4, 5, 1], 0)) // 2

console.log(maximumLength([2], 0)) // 1
