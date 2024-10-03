// 977. 有序数组的平方
// https://leetcode.cn/problems/squares-of-a-sorted-array/

// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // 全是正数
    if (nums[0] >= 0) return nums.map((num) => num ** 2)
    // 全是负数
    if (nums.at(-1) < 0) return nums.reverse().map((num) => num ** 2)
    // 正负数都有，用双指针，从左右两边挑出最大的平方数
    const result = []
    let i = 0
    let j = nums.length - 1
    for (let k = nums.length - 1; k >= 0; k--) {
        const a = nums[i] ** 2
        const b = nums[j] ** 2
        if (a > b) {
            result[k] = a
            i++
        } else {
            result[k] = b
            j--
        }
    }
    return result
}

console.log(sortedSquares([1, 2, 3, 4, 5])) // [1,2,3,4,5]
console.log(sortedSquares([-4, -1, 0, 3, 10])) // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])) // [4,9,9,49,121]
