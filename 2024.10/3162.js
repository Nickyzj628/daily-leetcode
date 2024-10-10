// 3162. 优质数对的总数 I
// https://leetcode.cn/problems/find-the-number-of-good-pairs-i/

// 给你两个整数数组 nums1 和 nums2，长度分别为 n 和 m。同时给你一个正整数 k。
// 如果 nums1[i] 可以被 nums2[j] * k 整除，则称数对 (i, j) 为 优质数对（0 <= i <= n - 1, 0 <= j <= m - 1）。
// 返回 优质数对 的总数。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
    // 暴力模拟题，看了看题目感觉明天有难了
    let answer = 0;
    for (let num1 of nums1) {
        for (let num2 of nums2) {
            if (num1 % (num2 * k) === 0) {
                answer++;
            }
        }
    }
    return answer;
};

// 2个优质数对分别是 (3, 0) 和 (3, 1)。
console.log(numberOfPairs([1, 2, 4, 12], [2, 4], 3)); // 2
