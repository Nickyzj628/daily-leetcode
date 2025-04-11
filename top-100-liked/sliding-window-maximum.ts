/**
 * 239. 滑动窗口最大值
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回 滑动窗口中的最大值 。
 * https://leetcode.cn/problems/sliding-window-maximum/description/?envType=study-plan-v2&envId=top-100-liked
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
  const answer: number[] = [];

  // 滑动窗口 + 单调队列
  const queue: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const startIndex = i - k + 1;

    // 移除窗口外的数
    if (queue.length > 0 && queue[0] < startIndex) {
      queue.shift();
    }

    // 移除比当前小的数
    while (queue.length > 0) {
      const prevNum = nums[queue[queue.length - 1]];
      if (prevNum >= num) break;
      queue.pop();
    }

    // 入队
    queue.push(i);

    // 记录窗口最大值
    if (i + 1 >= k) {
      const maxNum = nums[queue[0]];
      answer.push(maxNum);
    }
  }

  // 双重遍历，超时
  // for (let i = 0; i <= nums.length - k; i++) {
  //   const windowNums = nums.slice(i, i + k);
  //   answer.push(Math.max(...windowNums));
  // }

  return answer;
};

// [3,3,5,5,6,7]
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));