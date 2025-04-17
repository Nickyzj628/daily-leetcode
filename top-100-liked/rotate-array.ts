/**
 * 189. 轮转数组
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // 3次反转
  const length = nums.length;
  // 去除重复的反转流程
  k = k % length;

  const reverse = (i: number, j: number) => {
    while (i < j) {
      const temp = nums[i];
      nums[i++] = nums[j];
      nums[j--] = temp;
    }
  };

  // [1,2,3,4,5,6,7]
  // [7,6,5,4,3,2,1]
  reverse(0, length - 1);
  // [5,6,7,4,3,2,1]
  reverse(0, k - 1);
  // [5,6,7,1,2,3,4]
  reverse(k, length - 1);
};

// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr);