/**
 * 283. 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * https://leetcode.cn/problems/move-zeroes/description/?envType=study-plan-v2&envId=top-100-liked
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // 双指针
  for (let i = 0, j = 0; j < nums.length; j++) {
    if (nums[j] === 0) continue;
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
  }

  // 库函数
  // let zeroCount = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i];
  //   if (num !== 0) continue;
  //   nums.splice(i, 1);
  //   zeroCount++;
  //   i--;
  // }
  // nums.push(...new Array(zeroCount).fill(0));
};

// [1,0,0]
// const nums = [0, 0, 1];

// [1,3,12,0,0]
const nums = [0, 1, 0, 3, 12];

moveZeroes(nums);
console.log(nums);