// 3200. 三角形的最大高度
// https://leetcode.cn/problems/maximum-height-of-a-triangle/

// 给你两个整数 red 和 blue，分别表示红色球和蓝色球的数量。你需要使用这些球来组成一个三角形，满足第 1 行有 1 个球，第 2 行有 2 个球，第 3 行有 3 个球，依此类推。
// 每一行的球必须是 相同 颜色，且相邻行的颜色必须 不同。
// 返回可以实现的三角形的 最大 高度。

/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red, blue) {
    // 枚举红+蓝/蓝+红两种情况
    const getHeight = (a, b) => {
        let i = 1;
        // 直到其中一个球用完
        while (a >= 0 && b >= 0) {
            // 奇数放置a
            if (i % 2 === 1) {
                a -= i;
            }
            // 偶数放置b
            else {
                b -= i;
            }
            // 下一层
            i++;
        }
        return i - 2;
    };
    return Math.max(getHeight(red, blue), getHeight(blue, red));
};

console.log(maxHeightOfTriangle(2, 4)); // 3
console.log(maxHeightOfTriangle(10, 10)); // 5
