// 2390. 从字符串中移除星号
// https://leetcode.cn/problems/removing-stars-from-a-string/

// 给你一个包含若干星号 * 的字符串 s 。
// 在一步操作中，你可以：
// 选中 s 中的一个星号。
// 移除星号 左侧 最近的那个 非星号 字符，并移除该星号自身。
// 返回移除 所有 星号之后的字符串。
// 注意：
// 生成的输入保证总是可以执行题面中描述的操作。
// 可以证明结果字符串是唯一的。

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
	// 栈
	const stack = []
	for (let char of s) {
		if (char === "*") stack.pop()
		else stack.push(char)
	}
	return stack.join("")

	// 正则，测试用例31超时
	// while (s.match(/\w\*/g)) {
	// 	s = s.replace(/\w\*/g, "")
	// }
	// return s

	// 字符串，测试用例34超时
	// const S = Array.from(s)
	// for (let i = 0; i < S.length; i++) {
	// 	const char = S[i]
	// 	if (char !== "*") continue
	// 	S.splice(i - 1, 2)
	// 	i -= 2
	// }
	// return S.join("")
}

console.log(removeStars("leet**cod*e")) // "lecoe"
console.log(removeStars("erase*****")) // ""
