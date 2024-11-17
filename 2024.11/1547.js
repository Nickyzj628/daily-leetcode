// 1547. 切棍子的最小成本
// https://leetcode.cn/problems/minimum-cost-to-cut-a-stick/

// 有一根长度为 n 个单位的木棍，棍上从 0 到 n 标记了若干位置。例如，长度为 6 的棍子可以标记如下：
// 给你一个整数数组 cuts ，其中 cuts[i] 表示你需要将棍子切开的位置。
// 你可以按顺序完成切割，也可以根据需要更改切割的顺序。
// 每次切割的成本都是当前要切割的棍子的长度，切棍子的总成本是历次切割成本的总和。对棍子进行切割将会把一根木棍分成两根较小的木棍（这两根木棍的长度和就是切割前木棍的长度）。请参阅第一个示例以获得更直观的解释。
// 返回切棍子的 最小总成本 。

/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
  // 同312. 戳气球
  // dp[i][j]: 切(i,j)所需最小成本 = 枚举k∈(i,j)，计算min(dp[i][j], dp[i][k] + dp[k][j])
  const m = cuts.length;
  const dp = Array.from(Array(m + 2), () => Array(m + 2).fill(0));
  cuts = [0, ...cuts, n].sort((a, b) => a - b);

  // 模拟首次遍历情况，方便理解i、j、k初始值和条件
  // [0, 1, 3, 4, 5, 7]
  //           i  k  j
  for (let i = m - 1; i >= 0; i--) {
    for (let j = i + 2; j < m + 2; j++) {
      let res = Infinity;
      for (let k = i + 1; k < j; k++) {
        res = Math.min(res, dp[i][k] + dp[k][j]);
      }
      dp[i][j] = res + cuts[j] - cuts[i];
    }
  }

  return dp[0][m + 1];
};

console.log(minCost(7, [1, 3, 4, 5]));  // 16