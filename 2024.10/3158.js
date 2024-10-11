// 3158. 求出出现两次数字的 XOR 值
// https://leetcode.cn/problems/find-the-xor-of-numbers-which-appear-twice/

// 给你一个数组 nums ，数组中的数字 要么 出现一次，要么 出现两次。
// 请你返回数组中所有出现两次数字的按位 XOR 值，如果没有数字出现过两次，返回 0 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
    // 哈希表+位运算
    let answer = 0;
    const set = new Set();
    for (let num of nums) {
        if (set.has(num)) answer ^= num;
        else set.add(num);
    }
    return answer;
};

// 数字 1 和 2 出现过两次。1 XOR 2 == 3 。
console.log(duplicateNumbersXOR([1, 2, 2, 1])); // 3
