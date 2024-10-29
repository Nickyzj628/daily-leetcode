// 3216. 交换后字典序最小的字符串
// https://leetcode.cn/problems/lexicographically-smallest-string-after-a-swap/

// 给你一个仅由数字组成的字符串 s，在最多交换一次 相邻 且具有相同 奇偶性 的数字后，返回可以得到的字典序最小的字符串。
// 如果两个数字都是奇数或都是偶数，则它们具有相同的奇偶性。例如，5 和 9、2 和 4 奇偶性相同，而 6 和 9 奇偶性不同。

/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
    // 遍历（贪心？）
    const nums = s.split("");
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        const preNum = nums[i - 1];
        if (num < preNum && num.charCodeAt() % 2 === preNum.charCodeAt() % 2) {
            nums[i] = preNum;
            nums[i - 1] = num;
            break;
        }
    }
    return nums.join("");
};

console.log(getSmallestString("45320")); // "43520"
