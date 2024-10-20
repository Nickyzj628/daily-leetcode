// 908. 最小差值 I
// https://leetcode.cn/problems/smallest-range-i/

// 给你一个整数数组 nums，和一个整数 k 。
// 在一个操作中，您可以选择 0 <= i < nums.length 的任何索引 i 。将 nums[i] 改为 nums[i] + x ，其中 x 是一个范围为 [-k, k] 的任意整数。对于每个索引 i ，最多 只能 应用 一次 此操作。
// nums 的 分数 是 nums 中最大和最小元素的差值。 
// 在对  nums 中的每个索引最多应用一次上述操作后，返回 nums 的最低 分数 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    // 模拟题，找到2个最值，判断它们是否相隔2*k
    // 0 <= nums[i] <= 10^4
    let min = 10001
    let max = -1
    for (let num of nums) {
        min = Math.min(min, num)
        max = Math.max(max, num)
    }
    if (max - min > 2 * k) return max - min - 2 * k // (max - k) - (min + k)
    return 0
};

// 将 nums 改为 [2,8]。分数是 max(nums) - min(nums) = 8 - 2 = 6。
console.log(smallestRangeI([0, 10], 2))   // 6

// 将 nums 改为 [4,4,4]。分数是 max(nums) - min(nums) = 4 - 4 = 0。
console.log(smallestRangeI([1, 3, 6], 3))  // 0