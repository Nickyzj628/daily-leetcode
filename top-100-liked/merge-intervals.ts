/**
 * 56. 合并区间
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * https://leetcode.cn/problems/merge-intervals/?envType=study-plan-v2&envId=top-100-liked
 */

function merge(intervals: number[][]): number[][] {
  // 排序 + 遍历
  intervals.sort((a, b) => a[0] - b[0]);
  const answer: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const prevInterval = answer.at(-1)!;
    const interval = intervals[i];
    // 相交，继续判断是否合并
    if (interval[0] <= prevInterval[1]) {
      // 合并
      if (interval[1] >= prevInterval[1]) {
        prevInterval[1] = interval[1];
      }
      // 丢弃
      continue;
    }
    // 不相交，追加答案
    answer.push(interval);
  }

  return answer;
};

// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));

// [[0,4]]
// console.log(merge([[1, 4], [0, 4]]));

// [[1,4]]
console.log(merge([[1, 4], [2, 3]]));