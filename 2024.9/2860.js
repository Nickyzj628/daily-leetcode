// 2860. 让所有学生保持开心的分组方法数
// https://leetcode.cn/problems/happy-students/

// 给你一个下标从 0 开始、长度为 n 的整数数组 nums ，其中 n 是班级中学生的总数。班主任希望能够在让所有学生保持开心的情况下选出一组学生：
// 如果能够满足下述两个条件之一，则认为第 i 位学生将会保持开心：
// 这位学生被选中，并且被选中的学生人数 严格大于 nums[i] 。
// 这位学生没有被选中，并且被选中的学生人数 严格小于 nums[i] 。
// 返回能够满足让所有学生保持开心的分组方法的数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countWays = function (nums) {
   // 思维题，排序+枚举
   let answer = 0
   // 0 2 3 3 6 6 7 7
   nums.sort((a, b) => a - b)
   const { length } = nums
   // 全不选时满足条件
   if (nums[0] > 0) answer++
   // 全选时满足条件
   if (nums[length - 1] < length) answer++
   // 枚举满足条件=前一个学生<当前下标<当前学生
   for (let i = 1; i < length; i++) {
      if (nums[i - 1] < i && nums[i] > i) answer++
   }
   return answer
}

// 班主任没有选中学生。
// 班主任选中所有学生形成一组。
console.log(countWays([1, 1])) // 2

// 班主任选中下标为 1 的学生形成一组。
// 班主任选中下标为 1、2、3、6 的学生形成一组。
// 班主任选中所有学生形成一组。
console.log(countWays([6, 0, 3, 3, 6, 7, 2, 7])) // 3
