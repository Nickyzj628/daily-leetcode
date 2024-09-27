// 2516. 每种字符至少取 K 个
// https://leetcode.cn/problems/take-k-of-each-character-from-left-and-right/

// 给你一个由字符 'a'、'b'、'c' 组成的字符串 s 和一个非负整数 k 。每分钟，你可以选择取走 s 最左侧 还是 最右侧 的那个字符。
// 你必须取走每种字符 至少 k 个，返回需要的 最少 分钟数；如果无法取到，则返回 -1 。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
	// 滑动窗口，把问题转换为：在保证左右两侧共有k个a、b、c时，维护最长的中间子串
	// 初始化两侧字符数
	const counts = [0, 0, 0]
	for (let char of s) {
		counts[char.charCodeAt() - 97]++
	}
	// 判断字符数是否满足条件
	const check = () => {
		for (let count of counts) {
			if (count < k) return false
		}
		return true
	}
	if (!check()) return -1
	// 寻找最长中间子串
	const { length } = s
	let answer = length
	for (let i = 0, j = 0; j < length; j++) {
		const charJ = s[j]
		counts[charJ.charCodeAt() - 97]--
		while (!check()) {
			const charI = s[i++]
			counts[charI.charCodeAt() - 97]++
		}
		// 更新答案为min(字符串全长-当前中间窗口长度)
		answer = Math.min(answer, length - (j - i + 1))
	}
	return answer
}

// 从 s 的左侧取三个字符，现在共取到两个字符 'a' 、一个字符 'b' 。
// 从 s 的右侧取五个字符，现在共取到四个字符 'a' 、两个字符 'b' 和两个字符 'c' 。
// 共需要 3 + 5 = 8 分钟。
// 可以证明需要的最少分钟数是 8 。
console.log(takeCharacters("aabaaaacaabc", 2)) // 8
