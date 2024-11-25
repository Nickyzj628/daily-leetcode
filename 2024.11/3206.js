// 3206. 交替组 I
// https://leetcode.cn/problems/alternating-groups-i/

// 给你一个整数数组 colors ，它表示一个由红色和蓝色瓷砖组成的环，第 i 块瓷砖的颜色为 colors[i] ：
// colors[i] == 0 表示第 i 块瓷砖的颜色是 红色 。
// colors[i] == 1 表示第 i 块瓷砖的颜色是 蓝色 。
// 环中连续 3 块瓷砖的颜色如果是 交替 颜色（也就是说中间瓷砖的颜色与它 左边 和 右边 的颜色都不同），那么它被称为一个 交替 组。
// 请你返回 交替 组的数目。
// 注意 ，由于 colors 表示一个 环 ，第一块 瓷砖和 最后一块 瓷砖是相邻的。

/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
  const getPrevColor = (i) => {
    if (i === 0) return colors.at(-1);
    return colors[i - 1];
  }

  const getNextColor = (i) => {
    if (i === colors.length - 1) return colors[0];
    return colors[i + 1];
  }

  let answer = 0;
  for (let i = 0; i < colors.length; i++) {
    const currColor = colors[i];
    const prevColor = getPrevColor(i);
    const nextColor = getNextColor(i);
    if (prevColor === nextColor && currColor !== nextColor) answer++;
  }
  return answer;
};

console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1]));  // 3