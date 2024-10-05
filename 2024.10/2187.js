// 2187. 完成旅途的最少时间
// https://leetcode.cn/problems/minimum-time-to-complete-trips/

// 给你一个数组 time ，其中 time[i] 表示第 i 辆公交车完成 一趟旅途 所需要花费的时间。
// 每辆公交车可以 连续 完成多趟旅途，也就是说，一辆公交车当前旅途完成后，可以 立马开始 下一趟旅途。每辆公交车 独立 运行，也就是说可以同时有多辆公交车在运行且互不影响。
// 给你一个整数 totalTrips ，表示所有公交车 总共 需要完成的旅途数目。请你返回完成 至少 totalTrips 趟旅途需要花费的 最少 时间。

/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
    // 公式化二分查找
    let l = 1
    let r = totalTrips * Math.max(...time)
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (canFinish(mid)) r = mid - 1
        else l = mid + 1
    }
    return l

    function canFinish(totalTime) {
        let costTrips = 0
        for (let t of time) {
            costTrips += Math.floor(totalTime / t)
            if (costTrips >= totalTrips) return true
        }
        return costTrips >= totalTrips
    }
}

// - 时刻 t = 1 ，每辆公交车完成的旅途数分别为 [1,0,0] 。
//   已完成的总旅途数为 1 + 0 + 0 = 1 。
// - 时刻 t = 2 ，每辆公交车完成的旅途数分别为 [2,1,0] 。
//   已完成的总旅途数为 2 + 1 + 0 = 3 。
// - 时刻 t = 3 ，每辆公交车完成的旅途数分别为 [3,1,1] 。
//   已完成的总旅途数为 3 + 1 + 1 = 5 。
// 所以总共完成至少 5 趟旅途的最少时间为 3 。
console.log(minimumTime([1, 2, 3], 5)) // 3
