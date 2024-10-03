// 2207. 字符串中最多数目的子序列
// https://leetcode.cn/problems/maximize-number-of-subsequences-in-a-string/

// 给你一个下标从 0 开始的字符串 text 和另一个下标从 0 开始且长度为 2 的字符串 pattern ，两者都只包含小写英文字母。
// 你可以在 text 中任意位置插入 一个 字符，这个插入的字符必须是 pattern[0] 或者 pattern[1] 。注意，这个字符可以插入在 text 开头或者结尾的位置。
// 请你返回插入一个字符后，text 中最多包含多少个等于 pattern 的 子序列 。
// 子序列 指的是将一个字符串删除若干个字符后（也可以不删除），剩余字符保持原本顺序得到的字符串。

/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function (text, pattern) {
    // 贪心，在开头插入pattern[0]或在结尾插入pattern[1]能得到最佳答案
    // 答案 = 原始子序列数量 + (插入pattern[0]时pattern[1]的数量 | 插入pattern[1]时pattern[0]的数量)
    let countSubsequence = 0
    const [a, b] = pattern
    let countA = 0
    let countB = 0
    for (let char of text) {
        if (char === b) {
            countSubsequence += countA
            countB++
        }
        if (char === a) {
            countA++
        }
    }
    return countSubsequence + Math.max(countA, countB)
}

// 可以得到 6 个 "ab" 子序列的部分方案为 "aaabb" ，"aaabb" 和 "aabbb" 。
console.log(maximumSubsequenceCount("aabb", "ab")) // 6
