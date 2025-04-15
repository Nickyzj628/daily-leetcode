/**
 * 76. 最小覆盖子串
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 注意：
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * https://leetcode.cn/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-100-liked
 */

function minWindow(s: string, t: string): string {
  if (t.length > s.length) return "";

  // 滑动窗口 + 哈希表
  let answer = "";

  // 所需的字符数量
  const charCountMap = new Map();
  for (let char of t) {
    const count = charCountMap.get(char) ?? 0;
    charCountMap.set(char, count + 1);
  }
  // 每个字符只记一次，便于后续计算
  let needCount = charCountMap.size;

  // 移动右指针-所需数
  for (let left = 0, right = 0; right < s.length; right++) {
    const char = s[right];
    const count = charCountMap.get(char);
    if (count === undefined) continue;

    charCountMap.set(char, count - 1);
    // 每个字符只记一次，便于计算
    if (count === 1) {
      needCount--;
    }

    while (needCount === 0) {
      // 更新答案
      const newAnswer = s.slice(left, right + 1);
      if (!answer || answer.length > newAnswer.length) {
        answer = newAnswer;
      }
      // 移动左指针+所需数
      const char = s[left];
      const count = charCountMap.get(char);
      if (count !== undefined) {
        charCountMap.set(char, count + 1);
        // 每个字符只记一次，便于计算
        if (count === 0) {
          needCount++;
        }
      }
      left++;
    }
  }

  return answer;
};

// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
console.log(minWindow("ADOBECODEBANC", "ABC"));

// "abc"
console.log(minWindow("abc", "cba"));