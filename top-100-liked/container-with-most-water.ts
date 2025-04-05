/**
 * 11. 盛最多水的容器
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * 说明：你不能倾斜容器。
 * https://leetcode.cn/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-100-liked
 */

function maxArea(height: number[]): number {
  // 双指针
  let answer = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // x * y
    const area = (right - left) * Math.min(height[left], height[right]);
    answer = Math.max(answer, area);

    // 移动较短的那条线
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return answer;
};

// 49
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));