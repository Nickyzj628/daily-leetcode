/**
 * 137. 只出现一次的数字 II
 * https://leetcode.cn/problems/single-number-ii/description/
 */

export function singleNumber(nums: number[]): number {
    // 哈希表，存放出现次数小于3的数字，反之移除，最后返回剩下的那个数
    const map = new Map<number, number>();
    nums.forEach((num) => {
        const count = map.get(num);
        const nextCount = (count ?? 0) + 1;
        if (nextCount >= 3) {
            map.delete(num);
        } else {
            map.set(num, nextCount);
        }
    });
    return [...map.keys()][0];

    // 位运算，待续
};

console.log(singleNumber([2, 2, 3, 2]));