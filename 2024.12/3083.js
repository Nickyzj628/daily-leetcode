// 3083. 字符串及其反转中是否存在同一子字符串
// https://leetcode.cn/problems/existence-of-a-substring-in-a-string-and-its-reverse/

// 给你一个字符串 s ，请你判断字符串 s 是否存在一个长度为 2 的子字符串，在其反转后的字符串中也出现。
// 如果存在这样的子字符串，返回 true；如果不存在，返回 false 。

/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  // 哈希表+遍历
  const set = new Set();
  for (let i = 0; i < s.length - 1; i++) {
    // 正向字符串加入哈希表
    set.add(`${s[i]}${s[i + 1]}`);
    // 判断表中是否存在反向字符串
    if (set.has(`${s[i + 1]}${s[i]}`)) {
      return true;
    }
  }
  return false;
};

// 子字符串 "ee" 的长度为 2，它也出现在 reverse(s) == "edocteel" 中。
console.log(isSubstringPresent("leetcode"));  // true