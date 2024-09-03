// 2708. 一个小组的最大实力值
// https://leetcode.cn/problems/maximum-strength-of-a-group/

// 给你一个下标从 0 开始的整数数组 nums ，它表示一个班级中所有学生在一次考试中的成绩。老师想选出一部分同学组成一个 非空 小组，且这个小组的 实力值 最大，如果这个小组里的学生下标为 i0, i1, i2, ... , ik ，那么这个小组的实力值定义为 nums[i0] * nums[i1] * nums[i2] * ... * nums[ik​] 。
// 请你返回老师创建的小组能得到的最大实力值为多少。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function (nums) {
    // DP，维护最大、最小乘积
    let maxProduct = nums[0]
    let minProduct = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        const _maxProduct = maxProduct
        maxProduct = Math.max(maxProduct, num, num * maxProduct, num * minProduct)
        minProduct = Math.min(minProduct, num, num * minProduct, num * _maxProduct)
    }
    return maxProduct
}

console.log(maxStrength([3, -1, -5, 2, 5, -9])) // 1350
console.log(maxStrength([-4, -5, -4])) // 20
