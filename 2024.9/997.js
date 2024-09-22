// 997. 找到小镇的法官
// https://leetcode.cn/problems/find-the-town-judge/

// 小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。
// 如果小镇法官真的存在，那么：
// 1. 小镇法官不会信任任何人。
// 2. 每个人（除了小镇法官）都信任这位小镇法官。
// 3. 只有一个人同时满足属性 1 和属性 2 。
// 给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。
// 如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
	// 图论，也可以是模拟题：
	// 1. 法官不存在于trust数组
	// 2. 法官被n-1个人信任
	// 3. 找出法官
	// 模拟：
	// 1: -1 -1
	// 2: -1 -1
	// 3: +1 +1 +1 (不存在于trust数组，被n-1个人信任)
	// 4: +1 +1 -1
	// 注意村民编号从1开始
	const people = new Array(n + 1).fill(0)
	for (let [a, b] of trust) {
		people[a]--
		people[b]++
	}
	// 找出法官
	for (let i = 1; i <= n; i++) {
		if (people[i] === n - 1) return i
	}
	return -1
}

console.log(findJudge(1, [])) // 1

console.log(
	findJudge(4, [
		[1, 3],
		[1, 4],
		[2, 3],
		[2, 4],
		[4, 3],
	])
) // 3

console.log(
	findJudge(3, [
		[1, 3],
		[2, 3],
	])
) // 3
