// 661. 图片平滑器
// https://leetcode.cn/problems/image-smoother/

// 图像平滑器 是大小为 3 x 3 的过滤器，用于对图像的每个单元格平滑处理，平滑处理后单元格的值为该单元格的平均灰度。
// 每个单元格的  平均灰度 定义为：该单元格自身及其周围的 8 个单元格的平均值，结果需向下取整。（即，需要计算蓝色平滑器中 9 个单元格的平均值）。
// 如果一个单元格周围存在单元格缺失的情况，则计算平均灰度时不考虑缺失的单元格（即，需要计算红色平滑器中 4 个单元格的平均值）。

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const m = img.length;
  const n = img[0].length;
  const answer = Array.from(Array(m), () => Array(n).fill(0));

  // 遍历每个单元格
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 遍历周围单元格
      let subAnswer = 0;
      let count = 0;
      for (let y = i - 1; y <= i + 1; y++) {
        if (y < 0 || y >= m) continue;
        for (let x = j - 1; x <= j + 1; x++) {
          if (x < 0 || x >= n) continue;
          subAnswer += img[y][x];
          count++;
        }
      }
      answer[i][j] = Math.floor(subAnswer / count);
    }
  }

  return answer;
};

// 对于点 (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
// 对于点 (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
// 对于点 (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138
console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
);
// [
//   [137, 141, 137],
//   [141, 138, 141],
//   [137, 141, 137],
// ];
