// 3184. 构成整天的下标对数目 I
// https://leetcode.cn/problems/count-pairs-that-form-a-complete-day-i/

// 给你一个整数数组 hours，表示以 小时 为单位的时间，返回一个整数，表示满足 i < j 且 hours[i] + hours[j] 构成 整天 的下标对 i, j 的数目。
// 整天 定义为时间持续时间是 24 小时的 整数倍 。
// 例如，1 天是 24 小时，2 天是 48 小时，3 天是 72 小时，以此类推。

/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
    // 同1. 两数之和
    let answer = 0;
    const count = new Array(24).fill(0);
    // 正序遍历一次，满足i < j
    for (let hour of hours) {
        // 再寻找hours[i] + hours[j]满足整天的数对
        answer += count[(24 - (hour % 24)) % 24];
        count[hour % 24]++;
    }
    return answer;
};

// 构成整天的下标对分别是 (0, 1)、(0, 2) 和 (1, 2)。
console.log(countCompleteDayPairs([72, 48, 24, 3])); // 3

console.log(countCompleteDayPairs([11, 11, 24])); // 0

console.log(countCompleteDayPairs([21, 1, 6, 6, 21, 18, 24])); // 2
