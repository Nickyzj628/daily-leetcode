/**
 * 136. 只出现一次的数字
 * https://leetcode.cn/problems/single-number/description/?envType=study-plan-v2&envId=top-100-liked
 */

function singleNumber(nums: number[]): number {
    // 哈希表存只出现一次的数字，再次出现则从表中移除，最后返回剩下的那个数字
    // const set = new Set<number>();
    // nums.forEach((num) => {
    //     if (set.has(num)) {
    //         set.delete(num)
    //     } else {
    //         set.add(num);
    //     }
    // });
    // return Array.from(set)[0];

    // 异或运算，因为a^a=0，且0^b=b，所以a^a^b=b
    return nums.reduce((result, num) => {
        return result ^ num;
    });
};