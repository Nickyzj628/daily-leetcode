// 815. 公交路线
// https://leetcode.cn/problems/bus-routes/

// 给你一个数组 routes ，表示一系列公交线路，其中每个 routes[i] 表示一条公交线路，第 i 辆公交车将会在上面循环行驶。
// 例如，路线 routes[0] = [1, 5, 7] 表示第 0 辆公交车会一直按序列 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... 这样的车站路线行驶。
// 现在从 source 车站出发（初始时不在公交车上），要前往 target 车站。 期间仅可乘坐公交车。
// 求出 最少乘坐的公交车数量 。如果不可能到达终点车站，返回 -1 。

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    // 用BFS搜索最短路径
    // 建表记录每个车站会有哪些车
    const routeBuses = new Map()
    for (let bus = 0; bus < routes.length; bus++) {
        for (let route of routes[bus]) {
            const buses = routeBuses.get(route)
            if (!buses) routeBuses.set(route, [bus])
            else buses.push(bus)
        }
    }
    // fix: 不用坐车
    if (source === target) return 0
    // fix: 不存在的车站
    if (!routeBuses.has(source) || !routeBuses.has(target)) return -1
    // BFS从source搜索到target
    const queue = [[source, 0]] // [车站,坐了几辆车][]
    const visited = new Set()
    while (queue.length > 0) {
        const [route, count] = queue.shift()
        if (route === target) return count
        // 遍历经过当前车站的车
        for (let bus of routeBuses.get(route)) {
            // 遍历车经过的车站
            for (let route of routes[bus]) {
                if (visited.has(route)) continue
                visited.add(route)
                queue.push([route, count + 1])
            }
        }
    }
    return -1
}

// 最优策略是先乘坐第一辆公交车到达车站 7 , 然后换乘第二辆公交车到车站 6 。
console.log(
    numBusesToDestination(
        [
            [1, 2, 7],
            [3, 6, 7],
        ],
        1,
        6
    )
) // 2
