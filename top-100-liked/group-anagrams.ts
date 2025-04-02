/**
 * 49. 字母异位词分组
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 * https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked
 */

function groupAnagrams(strs: string[]): string[][] {
  // 哈希表 + 排序
  // 按字母重新排列的单词 -> 源单词[]
  const sortedToOriginsMap: Record<string, string[]> = {};
  for (const origin of strs) {
    const sorted = origin.split("").sort().join();
    if (!sortedToOriginsMap[sorted]) {
      sortedToOriginsMap[sorted] = [origin];
    } else {
      sortedToOriginsMap[sorted].push(origin);
    }
  }
  return Object.values(sortedToOriginsMap);
};

// [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));