/*
15. 三数之和
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
https://leetcode.cn/problems/3sum/description/?envType=study-plan-v2&envId=top-100-liked
*/

function threeSum(nums: number[]): number[][] {
  // 排序 + 枚举 + 两数之和
  const answer: number[][] = [];

  // [-4, -1, -1, 0, 1, 2]
  nums.sort((a, b) => a - b);

  // 枚举第一个数，作为两数之和的目标
  for (const [i, num] of nums.entries()) {
    if (num > 0) continue;
    if (num === nums[i - 1]) continue;
    // 两数之和
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      const num2 = nums[j];
      const num3 = nums[k];
      const sum = num + num2 + num3;
      if (sum < 0) {
        j++;
      }
      else if (sum === 0) {
        answer.push([num, num2, num3]);
        // 继续移动j、k，以便寻找下一个不重复的答案
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
      else {
        k--;
      }
    }
  }

  return answer;
};

/*
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
*/
console.log(threeSum([-1, 0, 1, 2, -1, -4]));  // [[-1,-1,2],[-1,0,1]]

console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]