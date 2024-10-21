// 910. 最小差值 II
// https://leetcode.cn/problems/smallest-range-ii/

// 给你一个整数数组 nums，和一个整数 k 。
// 对于每个下标 i（0 <= i < nums.length），将 nums[i] 变成 nums[i] + k 或 nums[i] - k 。
// nums 的 分数 是 nums 中最大元素和最小元素的差值。
// 在更改每个下标对应的值之后，返回 nums 的最小 分数 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function (nums, k) {
    // 排序，每次遍历让较小的一侧-k，较大的一侧+k
    // 图解：https://pic.leetcode.cn/1727165884-AiuZzx-lc910-c.png
    nums.sort((a, b) => a - b);
    let answer = nums.at(-1) - nums[0]; // 所有数都+k或-k的情况
    for (let i = 0; i < nums.length - 1; i++) {
        let min = Math.min(nums[0] + k, nums[i + 1] - k);
        let max = Math.max(nums[i] + k, nums.at(-1) - k);
        answer = Math.min(answer, max - min);
    }
    return answer;
};

// 将数组变为 [4, 6, 3] 。分数 = max(nums) - min(nums) = 6 - 3 = 3 。
console.log(smallestRangeII([1, 3, 6], 3)); // 3
