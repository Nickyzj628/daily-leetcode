// 2374. 边积分最高的节点
// https://leetcode.cn/problems/node-with-highest-edge-score/

// 给你一个有向图，图中有 n 个节点，节点编号从 0 到 n - 1 ，其中每个节点都 恰有一条 出边。
// 图由一个下标从 0 开始、长度为 n 的整数数组 edges 表示，其中 edges[i] 表示存在一条从节点 i 到节点 edges[i] 的 有向 边。
// 节点 i 的 边积分 定义为：所有存在一条指向节点 i 的边的节点的 编号 总和。
// 返回 边积分 最高的节点。如果多个节点的 边积分 相同，返回编号 最小 的那个。

/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
    // 遍历，统计所有入点，求入点总和最大的节点
    let answer = 0
    const indegree = new Array(edges.length).fill(0)
    for (let i = 0; i < edges.length; i++) {
        const toEdge = edges[i]
        indegree[toEdge] += i
        if (indegree[toEdge] < indegree[answer]) continue
        if (indegree[toEdge] > indegree[answer] || toEdge < answer) answer = toEdge
    }
    return answer
}

console.log(edgeScore([1, 0, 0, 0, 0, 7, 7, 5])) // 7
console.log(edgeScore([1, 2, 0])) // 0
console.log(edgeScore([3, 3, 3, 0])) // 0
