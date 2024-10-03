import { MinPriorityQueue } from "@datastructures-js/priority-queue"

// 1845. 座位预约管理系统
// https://leetcode.cn/problems/seat-reservation-manager/

// 请你设计一个管理 n 个座位预约的系统，座位编号从 1 到 n 。
// 请你实现 SeatManager 类：
// SeatManager(int n) 初始化一个 SeatManager 对象，它管理从 1 到 n 编号的 n 个座位。所有座位初始都是可预约的。
// int reserve() 返回可以预约座位的 最小编号 ，此座位变为不可预约。
// void unreserve(int seatNumber) 将给定编号 seatNumber 对应的座位变成可以预约。

/**
 * @param {number} n
 */
var SeatManager = function (n) {
    // 最小堆（力扣内置）
    this.queue = new MinPriorityQueue()
    for (let i = 1; i <= n; i++) {
        this.queue.enqueue(i)
    }
}

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
    return this.queue.dequeue().element
}

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
    this.queue.enqueue(seatNumber)
}

const seatManager = new SeatManager(5) // 初始化 SeatManager ，有 5 个座位。
console.log(seatManager.reserve()) // 所有座位都可以预约，所以返回最小编号的座位，也就是 1 。
console.log(seatManager.reserve()) // 可以预约的座位为 [2,3,4,5] ，返回最小编号的座位，也就是 2 。
console.log(seatManager.unreserve(2)) // 将座位 2 变为可以预约，现在可预约的座位为 [2,3,4,5] 。
console.log(seatManager.reserve()) // 可以预约的座位为 [2,3,4,5] ，返回最小编号的座位，也就是 2 。
console.log(seatManager.reserve()) // 可以预约的座位为 [3,4,5] ，返回最小编号的座位，也就是 3 。
console.log(seatManager.reserve()) // 可以预约的座位为 [4,5] ，返回最小编号的座位，也就是 4 。
console.log(seatManager.reserve()) // 唯一可以预约的是座位 5 ，所以返回 5 。
console.log(seatManager.unreserve(5)) // 将座位 5 变为可以预约，现在可预约的座位为 [5] 。
