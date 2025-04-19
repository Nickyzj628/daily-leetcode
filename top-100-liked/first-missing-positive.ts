/**
 * 41. 缺失的第一个正数
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * https://leetcode.cn/problems/first-missing-positive/description/?envType=study-plan-v2&envId=top-100-liked
 */

function firstMissingPositive(nums: number[]): number {
  // 换座位，时间O(n)，空间O(1)
  const n = nums.length;

  // 让[0, n]的正整数坐到正确的位置上
  for (let i = 0; i < n; i++) {
    while (true) {
      const a = nums[i];
      if (a < 1 || a > n) break;

      const b = nums[a - 1];
      if (a === b) break;

      nums[i] = b;
      nums[a - 1] = a;
    }
  }

  // 从左到右点名，抛出第一个不在座位上的数
  for (let i = 0; i < n; i++) {
    const currentNum = nums[i];
    const exceptNum = i + 1;
    if (currentNum !== exceptNum) {
      return exceptNum;
    }
  }

  // 点名全部通过，则返回下一个正整数
  return n + 1;

  // 哈希表，时间O(n)，空间O(n)
  // const set = new Set(nums);

  // let num = 1;
  // while (set.has(num)) {
  //   num++;
  // }

  // return num;
};

// 输出：3
// 解释：范围 [1,2] 中的数字都在数组中。
console.log(firstMissingPositive([1, 2, 0]));

// 输出：2
// 解释：1 在数组中，但 2 没有。
console.log(firstMissingPositive([3, 4, -1, 1]));

// 输出：1
// 解释：最小的正数 1 没有出现。
console.log(firstMissingPositive([7, 8, 9, 11, 12]));