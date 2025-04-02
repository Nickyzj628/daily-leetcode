/**
 * 1. 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 * 你可以按任意顺序返回答案。
 * https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked
 */

function twoSum(nums: number[], target: number): number[] {
  // 哈希表
  const numIndexMap = {};
  for (const [index2, num2] of nums.entries()) {
    const index = numIndexMap[num2];
    if (index !== undefined) {
      return [index, index2];
    }
    numIndexMap[target - num2] = index2;
  }
  return [];
};

// [0,1]
console.log(twoSum([2, 7, 11, 15], 9));