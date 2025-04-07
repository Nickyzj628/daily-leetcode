/**
 * 42. 接雨水
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * https://leetcode.cn/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-100-liked
 */

function trap(height: number[]): number {
  const { length } = height;

  // 前缀和，计算每个柱子左侧的最高柱子高度
  const prefix = new Array(length);
  prefix[0] = height[0];
  for (let i = 1; i < length; i++) {
    prefix[i] = Math.max(prefix[i - 1], height[i]);
  }

  // 后缀和，计算每个柱子右侧的最高柱子高度
  const suffix = new Array(length);
  suffix[length - 1] = height[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    suffix[i] = Math.max(suffix[i + 1], height[i]);
  }

  // 枚举，计算每个柱子能接的雨水
  // = min(左侧最高, 右侧最高) - 柱子高度
  let answer = 0;
  for (let i = 0; i < length; i++) {
    answer += Math.min(prefix[i], suffix[i]) - height[i];
  }

  return answer;
};

// https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6