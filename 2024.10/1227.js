// 1227. 飞机座位分配概率
// https://leetcode.cn/problems/airplane-seat-assignment-probability/

// 有 n 位乘客即将登机，飞机正好有 n 个座位。第一位乘客的票丢了，他随便选了一个座位坐下。
// 剩下的乘客将会：
// 如果他们自己的座位还空着，就坐到自己的座位上，
// 当他们自己的座位被占用时，随机选择其他座位

// 第 n 位乘客坐在自己的座位上的概率是多少？

/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function (n) {
    /**
     * 数学题，看图更容易理解https://pic.leetcode.cn/1727998809-pPBrhG-lc1227-3-c.png
     * f(n): n个乘客时，最后一个乘客坐对的概率
     * f(1) = 无论如何都坐对 = 1
     * f(2) = 1坐对(1/2) = 1/2
     * f(3) = 1坐对(1/3) + 1坐到2(1/3) * 2做二选一即f(2) = 1/2
     * f(4) = 1坐对(1/4) + 1坐到2(1/4) * 2做三选一即f(3) + 1坐到3(1/4) * 3做二选一即f(2) = 1/2
     * f(n) = 1, n=1
     * f(n) = 1/2, n>1
     */
    if (n === 1) return 1
    return 0.5
}

console.log(nthPersonGetsNthSeat(1)) // 1
console.log(nthPersonGetsNthSeat(2)) // 0.5
