// 2306. 公司命名
// https://leetcode.cn/problems/naming-a-company/

// 给你一个字符串数组 ideas 表示在公司命名过程中使用的名字列表。公司命名流程如下：
// 从 ideas 中选择 2 个 不同 名字，称为 ideaA 和 ideaB 。
// 交换 ideaA 和 ideaB 的首字母。
// 如果得到的两个新名字 都 不在 ideas 中，那么 ideaA ideaB（串联 ideaA 和 ideaB ，中间用一个空格分隔）是一个有效的公司名字。
// 否则，不是一个有效的名字。
// 返回 不同 且有效的公司名字的数目。

/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function (ideas) {
	// 首字母-后缀哈希表，基于题解稍作修改+注释
	let ansr = 0
	// 建表
	const m = Array.from({ length: 26 }, () => new Set())
	for (const idea of ideas) {
		const i = idea.charCodeAt(0) - "a".charCodeAt()
		m[i].add(idea.slice(1))
	}
	// 双指针统计符合条件的组合数
	for (let i = 0; i < 25; i++) {
		for (let j = i + 1; j < 26; j++) {
			// 统计首字母+后缀都一样的个数
			const k = Array.from(m[i]).filter((x) => m[j].has(x)).length
			// 去除k后的组合都是答案
			// m = [coffee, chord, come, boffee, bee, buffalo]
			// m[i] = [offee,   hord,   ome]
			// m[j] = [offee,   ee,   uffalo]
			// ansr = [hord, ome] * [ee, uffalo] * 2
			// 最后的*2是因为[hord, ee]换个顺序[ee, hord]就算不同的组合
			ansr += (m[i].size - k) * (m[j].size - k) * 2
		}
	}
	return ansr

	// 常规哈希表，超时
	// const origin = new Set(ideas)
	// const transform = new Set()
	// for (let i = 0; i < ideas.length - 1; i++) {
	// 	for (let j = i + 1; j < ideas.length; j++) {
	// 		const ideaA = `${ideas[j][0]}${ideas[i].slice(1)}`
	// 		const ideaB = `${ideas[i][0]}${ideas[j].slice(1)}`
	// 		if (origin.has(ideaA) || origin.has(ideaB)) continue
	// 		transform.add(`${ideaA} ${ideaB}`).add(`${ideaB} ${ideaA}`)
	// 	}
	// }
	// return transform.size
}

// 下面列出一些有效的选择方案：
// - ("coffee", "donuts")：对应的公司名字是 "doffee conuts" 。
// - ("donuts", "coffee")：对应的公司名字是 "conuts doffee" 。
// - ("donuts", "time")：对应的公司名字是 "tonuts dime" 。
// - ("donuts", "toffee")：对应的公司名字是 "tonuts doffee" 。
// - ("time", "donuts")：对应的公司名字是 "dime tonuts" 。
// - ("toffee", "donuts")：对应的公司名字是 "doffee tonuts" 。
// 因此，总共有 6 个不同的公司名字。
// 下面列出一些无效的选择方案：
// - ("coffee", "time")：在原数组中存在交换后形成的名字 "toffee" 。
// - ("time", "toffee")：在原数组中存在交换后形成的两个名字。
// - ("coffee", "toffee")：在原数组中存在交换后形成的两个名字。
console.log(distinctNames(["coffee", "donuts", "time", "toffee"])) // 6

console.log(distinctNames(["lack", "back"])) // 0
