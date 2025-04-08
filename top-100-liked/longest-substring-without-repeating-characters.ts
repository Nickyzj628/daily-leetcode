/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 的长度。
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-100-liked
 */

function lengthOfLongestSubstring(s: string): number {
  // 滑动窗口 + 哈希表
  const length = s.length;
  const charIndexMap = {};
  let answer = 0;

  // 左指针初始化为-1，右指针从0开始递增，这样才能计算出正确长度（用例1）
  for (let left = -1, right = 0; right < length; right++) {
    const char = s[right];
    const charIndex = charIndexMap[char];
    // 如果字符曾出现过，则更新左指针到对应下标
    // 左指针应该是递增的，所以需要max（用例2）
    if (charIndex !== undefined) {
      left = Math.max(left, charIndex);
    }
    charIndexMap[char] = right;
    answer = Math.max(answer, right - left);
  }

  return answer;
};

// 3
// 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
console.log(lengthOfLongestSubstring("abcabcbb"));

// 2
console.log(lengthOfLongestSubstring("abba"));

// 3
console.log(lengthOfLongestSubstring("pwwkew"));

// 3
console.log(lengthOfLongestSubstring("dvdf"));