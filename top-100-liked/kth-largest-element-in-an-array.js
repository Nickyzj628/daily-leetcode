/**
 * 215. 数组中的第K个最大元素
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/?envType=study-plan-v2&envId=top-100-liked
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // 三路快速选择
    const pivot = nums.splice(
        Math.floor(nums.length / 2),
        1
    )[0];

    const biggers = [];
    const equals = [];
    const smallers = [];

    nums.forEach((num) => {
        if (num > pivot) {
            biggers.push(num);
        } else if (num === pivot) {
            equals.push(num);
        } else {
            smallers.push(num);
        }
    });

    if (k <= biggers.length) {
        return findKthLargest(biggers, k);
    }
    const equalsK = biggers.length + equals.length + 1;
    if (k <= equalsK) {
        return pivot;
    }
    return findKthLargest(smallers, k - equalsK);
};

// 4
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));