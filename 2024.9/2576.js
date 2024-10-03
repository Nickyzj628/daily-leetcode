// 2576. 求出最多标记下标
// https://leetcode.cn/problems/find-the-maximum-number-of-marked-indices/

// 给你一个下标从 0 开始的整数数组 nums 。
// 一开始，所有下标都没有被标记。你可以执行以下操作任意次：
// 选择两个 互不相同且未标记 的下标 i 和 j ，满足 2 * nums[i] <= nums[j] ，标记下标 i 和 j 。
// 请你执行上述操作任意次，返回 nums 中最多可以标记的下标数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
    // 排序 + 双指针
    // 先排序，再用小数和大数配对
    nums.sort((a, b) => a - b)
    let i = 0
    for (let j = Math.floor((nums.length + 1) / 2); j < nums.length; j++) {
        if (nums[i] * 2 <= nums[j]) i++
    }
    return i * 2
}

// 第一次操作中，选择 i = 2 和 j = 1 ，操作可以执行的原因是 2 * nums[2] <= nums[1] ，标记下标 2 和 1 。
// 没有其他更多可执行的操作，所以答案为 2 。
console.log(maxNumOfMarkedIndices([3, 5, 2, 4])) // 2
