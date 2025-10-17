/**
 * 260. 只出现一次的数字 III
 * https://leetcode.cn/problems/single-number-iii/
 */

function singleNumber(nums: number[]): number[] {
    // 哈希表，存放出现次数小于2的数，反之从表中移除
    const set = new Set<number>();
    nums.forEach((num) => {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    });
    return [...set.values()];

    // 位运算，待续
};