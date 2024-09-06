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
	// DP，阅读理解题
	// dp[i][l]：以nums[i]结尾且最好子序列长度不超过l的结果，0<=l<=k
	if (nums.length < 2) return nums.length
	let answer = 0
	const dp = Array.from({ length: nums.length }, () => new Array(k + 1).fill(1))
	for (let i = 1; i < nums.length; i++) {
		for (let l = 0; l <= k; l++) {
			for (let j = 0; j < i; j++) {
				if (nums[i] === nums[j]) dp[i][l] = Math.max(dp[i][l], dp[j][l] + 1)
				else if (l > 0) dp[i][l] = Math.max(dp[i][l], dp[j][l - 1] + 1)
			}
		}
		answer = Math.max(answer, dp[i][k])
	}
	return answer
}

// 最长好子序列为 [1,2,1,1]
console.log(maximumLength([1, 2, 1, 1, 3], 2)) // 4

// 最长好子序列为 [1,1]
// console.log(maximumLength([1, 2, 3, 4, 5, 1], 0)) // 2
