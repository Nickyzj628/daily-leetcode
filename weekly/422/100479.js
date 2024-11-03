// 100479. 统计平衡排列的数目

// 给你一个字符串 num 。如果一个数字字符串的奇数位下标的数字之和与偶数位下标的数字之和相等，那么我们称这个数字字符串是 平衡的 。
// 请你返回 num 不同排列 中，平衡 字符串的数目。
// 由于答案可能很大，请你将答案对 109 + 7 取余 后返回。
// 一个字符串的 排列 指的是将字符串中的字符打乱顺序后连接得到的字符串。

/**
 * @param {string} num
 * @return {number}
 */
var countBalancedPermutations = function (num) {
  // 先用回溯列出所有排列组合
  const nums = num.split("").map(Number).sort((a, b) => a - b);
  const permutations = [];
  const used = [];
  const path = [];
  const backtrack = () => {
    // 凑出一种排列
    if (path.length === nums.length) {
      permutations.push([...path]);
      return;
    }
    // 遍历剩余数字，寻找排列
    for (let i = 0; i < nums.length; i++) {
      // 不能选择已使用的数字，无论下标是否不同
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;
      // 选择数字
      used[i] = true;
      path.push(nums[i]);
      backtrack();
      // 撤销选择
      used[i] = false;
      path.pop();
    }
  };
  backtrack();

  // 统计平衡字符串个数
  let answer = 0;
  for (let permutation of permutations) {
    const sum = [0, 0];
    for (let i = 0; i < permutation.length; i++) {
      sum[i % 2] += permutation[i];
    }
    answer += Number(sum[0] === sum[1]);
  }
  return answer % (10 ** 9 + 7);
};

// num 的不同排列包括： "123" ，"132" ，"213" ，"231" ，"312" 和 "321" 。
// 它们之中，"132" 和 "231" 是平衡的。所以答案为 2 。
console.log(countBalancedPermutations("123")); // 2

console.log(countBalancedPermutations("112"));  // 1

console.log(countBalancedPermutations("022"));  // 2

// 超时
console.log(countBalancedPermutations("525720843"));  // 7200
console.log(countBalancedPermutations("4100092806")); // 12000
