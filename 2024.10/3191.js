// 3191. 使二进制数组全部等于 1 的最少操作次数 I
// https://leetcode.cn/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/

// 给你一个二进制数组 nums 。
// 你可以对数组执行以下操作 任意 次（也可以 0 次）：
// 选择数组中 任意连续 3 个元素，并将它们 全部反转 。
// 反转 一个元素指的是将它的值从 0 变 1 ，或者从 1 变 0 。
// 请你返回将 nums 中所有元素变为 1 的 最少 操作次数。如果无法全部变成 1 ，返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    // 贪心，依次确认第i个数字是0即可
    let answer = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === 1) continue;
        // 这步没必要
        // nums[i] ^= 1;
        nums[i + 1] ^= 1;
        nums[i + 2] ^= 1;
        answer++;
    }
    return nums.at(-1) === 1 && nums.at(-2) === 1 ? answer : -1;
};

console.log(minOperations([0, 1, 1, 1, 0, 0])); // 3
