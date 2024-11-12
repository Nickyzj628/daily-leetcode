// 3258. 统计满足 K 约束的子字符串数量 I
// https://leetcode.cn/problems/count-substrings-that-satisfy-k-constraint-i/

// 给你一个 二进制 字符串 s 和一个整数 k。
// 如果一个 二进制字符串 满足以下任一条件，则认为该字符串满足 k 约束：
// 字符串中 0 的数量最多为 k。
// 字符串中 1 的数量最多为 k。
// 返回一个整数，表示 s 的所有满足 k 约束 的子字符串的数量。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  // 滑动窗口
  let answer = 0;
  const count = [0, 0];
  for (let i = 0, j = 0; j < s.length; j++) {
    count[s[j]]++;
    while (count[0] > k && count[1] > k) {
      count[s[i]]--;
      i++;
    }
    answer += j - i + 1;
  }
  return answer;
};

// s 的所有子字符串中，除了 "1010"、"10101" 和 "0101" 外，其余子字符串都满足 k 约束。
console.log(countKConstraintSubstrings("10101", 1)); // 12