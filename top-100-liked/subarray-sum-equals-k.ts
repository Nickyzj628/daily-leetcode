/**
 * 560. 和为 K 的子数组
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 子数组是数组中元素的连续非空序列。
 * https://leetcode.cn/problems/subarray-sum-equals-k/description/?envType=study-plan-v2&envId=top-100-liked
 */

function subarraySum(nums: number[], k: number): number {
  // 前缀和 + 哈希表
  let answer = 0;
  const prefixCountMap = new Map([[0, 1]]);

  let sum = 0;
  for (const num of nums) {
    sum += num;

    const prefixCount = prefixCountMap.get(sum - k);
    if (prefixCount !== undefined) {
      answer += prefixCount;
    }

    prefixCountMap.set(
      sum,
      (prefixCountMap.get(sum) ?? 0) + 1
    );
  }
  return answer;

  // 双重遍历
  // let answer = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   let sum = 0;
  //   for (let j = i; j < nums.length; j++) {
  //     sum += nums[j];
  //     if (sum === k) {
  //       answer++;
  //     }
  //   }
  // }
  // return answer;
};

// 2
console.log(subarraySum([1, 1, 1], 2));

// 2
console.log(subarraySum([1, 2, 3], 3));

// 3
console.log(subarraySum([1, -1, 0], 0));