// 2073. 买票需要的时间
// https://leetcode.cn/problems/time-needed-to-buy-tickets/

// 有 n 个人前来排队买票，其中第 0 人站在队伍 最前方 ，第 (n - 1) 人站在队伍 最后方 。
// 给你一个下标从 0 开始的整数数组 tickets ，数组长度为 n ，其中第 i 人想要购买的票数为 tickets[i] 。
// 每个人买票都需要用掉 恰好 1 秒 。一个人 一次只能买一张票 ，如果需要购买更多票，他必须走到  队尾 重新排队（瞬间 发生，不计时间）。如果一个人没有剩下需要买的票，那他将会 离开 队伍。
// 返回位于位置 k（下标从 0 开始）的人完成买票需要的时间（以秒为单位）。

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    // 一次遍历
    // k人买n张票时，他前面的人最多买n张，后面的人最多买n-1张
    let answer = 0
    const pivot = tickets[k]
    for (let i = 0; i < tickets.length; i++) {
        const ticket = tickets[i]
        if (i <= k) answer += Math.min(ticket, pivot)
        else answer += Math.min(ticket, pivot - 1)
    }
    return answer
}

console.log(timeRequiredToBuy([2, 3, 2, 4], 2)) // 7
