// 2414. 最长的字母序连续子字符串的长度
// https://leetcode.cn/problems/length-of-the-longest-alphabetical-continuous-substring/

// 字母序连续字符串 是由字母表中连续字母组成的字符串。换句话说，字符串 "abcdefghijklmnopqrstuvwxyz" 的任意子字符串都是 字母序连续字符串 。
// 例如，"abc" 是一个字母序连续字符串，而 "acb" 和 "za" 不是。
// 给你一个仅由小写英文字母组成的字符串 s ，返回其 最长 的 字母序连续子字符串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
    // 字符串转ASCII码，answer记录最大长度，count记录当前长度
    let answer = 1
    let count = 1
    for (let i = 1; i < s.length; i++) {
        if (s[i].charCodeAt() - s[i - 1].charCodeAt() === 1) answer = Math.max(answer, ++count)
        else count = 1
    }
    return answer
}

console.log(longestContinuousSubstring("abacaba")) // 2
console.log(longestContinuousSubstring("abcde")) // 5
