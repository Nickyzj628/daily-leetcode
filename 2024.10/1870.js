// 1870. 准时到达的列车最小时速
// https://leetcode.cn/problems/minimum-speed-to-arrive-on-time/

// 给你一个浮点数 hour ，表示你到达办公室可用的总通勤时间。要到达办公室，你必须按给定次序乘坐 n 趟列车。另给你一个长度为 n 的整数数组 dist ，其中 dist[i] 表示第 i 趟列车的行驶距离（单位是千米）。
// 每趟列车均只能在整点发车，所以你可能需要在两趟列车之间等待一段时间。
// 例如，第 1 趟列车需要 1.5 小时，那你必须再等待 0.5 小时，搭乘在第 2 小时发车的第 2 趟列车。
// 返回能满足你准时到达办公室所要求全部列车的 最小正整数 时速（单位：千米每小时），如果无法准时到达，则返回 -1 。
// 生成的测试用例保证答案不超过 107 ，且 hour 的 小数点后最多存在两位数字 。

/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
    // 示例3的特殊判断
    if (dist.length > Math.ceil(hour)) return -1
    // 二分查找，时速范围[1, 10^7]
    let i = 1
    let j = 10 ** 7
    while (i < j) {
        const v = Math.floor((i + j) / 2)
        // 枚举距离算出总时间
        let cost = 0
        for (var d = 0; d < dist.length - 1; d++) {
            cost += Math.ceil(dist[d] / v)
        }
        cost += dist[d] / v
        // 判断条件，缩小查找范围
        if (cost <= hour) j = v
        else i = v + 1
    }
    return i
}

// 速度为 1 时：
// - 第 1 趟列车运行需要 1/1 = 1 小时。
// - 由于是在整数时间到达，可以立即换乘在第 1 小时发车的列车。第 2 趟列车运行需要 3/1 = 3 小时。
// - 由于是在整数时间到达，可以立即换乘在第 4 小时发车的列车。第 3 趟列车运行需要 2/1 = 2 小时。
// - 你将会恰好在第 6 小时到达。
console.log(minSpeedOnTime([1, 3, 2], 6)) // 1

console.log(minSpeedOnTime([1, 3, 2], 2.7)) // 3

console.log(minSpeedOnTime([1, 3, 2], 1.9)) // -1

console.log(minSpeedOnTime([1, 1, 100000], 2.01)) // 10000000

console.log(minSpeedOnTime([5, 3, 4, 6, 2, 2, 7], 10.92)) // 4
