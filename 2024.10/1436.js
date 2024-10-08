// 1436. 旅行终点站
// https://leetcode.cn/problems/destination-city/

// 给你一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。
// 题目数据保证线路图会形成一条不存在循环的线路，因此恰有一个旅行终点站。

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    // 图论，已知cityA=>cityB=>...，寻找没有出度的city
    const cityA = new Set();
    for (let [a, b] of paths) {
        cityA.add(a);
    }
    for (let [a, b] of paths) {
        if (!cityA.has(b)) return b;
    }
};

// 从 "London" 出发，最后抵达终点站 "Sao Paulo" 。本次旅行的路线是 "London" -> "New York" -> "Lima" -> "Sao Paulo" 。
console.log(
    destCity([
        ["London", "New York"],
        ["New York", "Lima"],
        ["Lima", "Sao Paulo"]
    ])
); // "Sao Paulo"
