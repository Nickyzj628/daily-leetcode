// 3192. 使二进制数组全部等于 1 的最少操作次数 II
// https://leetcode.cn/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/

// 给你一个二进制数组 nums 。
// 你可以对数组执行以下操作 任意 次（也可以 0 次）：
// 选择数组中 任意 一个下标 i ，并将从下标 i 开始一直到数组末尾 所有 元素 反转 。
// 反转 一个元素指的是将它的值从 0 变 1 ，或者从 1 变 0 。
// 请你返回将 nums 中所有元素变为 1 的 最少 操作次数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    // 同3191，但用奇偶反转次数优化掉了赋值过程
    let answer = 0;
    for (let num of nums) {
        if (num === answer % 2) answer++;
    }
    return answer;
};

console.log(minOperations([0, 1, 1, 0, 1])); // 4
