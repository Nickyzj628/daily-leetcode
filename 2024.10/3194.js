// 3194. 最小元素和最大元素的最小平均值
// https://leetcode.cn/problems/minimum-average-of-smallest-and-largest-elements/

// 你有一个初始为空的浮点数数组 averages。另给你一个包含 n 个整数的数组 nums，其中 n 为偶数。
// 你需要重复以下步骤 n / 2 次：
// 从 nums 中移除 最小 的元素 minElement 和 最大 的元素 maxElement。
// 将 (minElement + maxElement) / 2 加入到 averages 中。
// 返回 averages 中的 最小 元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    // 模拟题，排序+遍历
    nums.sort((a, b) => a - b);
    let answer = Infinity;
    for (let i = 0; i < nums.length / 2; i++) {
        answer = Math.min(answer, nums[i] + nums.at(-i - 1));
    }
    return answer / 2;
};

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1])); // 5.5
