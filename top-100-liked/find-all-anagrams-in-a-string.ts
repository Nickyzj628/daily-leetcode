/**
 * 438. 找到字符串中所有字母异位词
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/?envType=study-plan-v2&envId=top-100-liked
 */

function findAnagrams(s: string, p: string): number[] {
  // 滑动窗口
  const answer: number[] = [];

  const sLength = s.length;
  const pLength = p.length;
  const offset = "a".charCodeAt(0);

  // 特判用例2
  if (pLength > sLength) {
    return answer;
  }

  // 初始化字符统计
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < pLength; i++) {
    sCount[s[i].charCodeAt(0) - offset]++;
    pCount[p[i].charCodeAt(0) - offset]++;
  }

  // 在s数组里（定长pLength）滑动窗口，通过对比字符统计数组，找到答案
  const pCountString = pCount.toString();
  if (sCount.toString() === pCountString) {
    answer.push(0);
  }
  for (let i = 0; i < sLength - pLength; i++) {
    const shiftChar = s[i];
    const pushChar = s[i + pLength];
    sCount[shiftChar.charCodeAt(0) - offset]--;
    sCount[pushChar.charCodeAt(0) - offset]++;
    if (sCount.toString() === pCountString) {
      answer.push(i + 1);
    }
  }

  return answer;
};

// [0,6]
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
console.log(findAnagrams("cbaebabacd", "abc"));

// []
console.log(findAnagrams("aaaaaaaaaa", "aaaaaaaaaaaaa"));