// 1450. 在既定时间做作业的学生人数
// https://leetcode.cn/problems/number-of-students-doing-homework-at-a-given-time/

// 给你两个整数数组 startTime（开始时间）和 endTime（结束时间），并指定一个整数 queryTime 作为查询时间。
// 已知，第 i 名学生在 startTime[i] 时开始写作业并于 endTime[i] 时完成作业。
// 请返回在查询时间 queryTime 时正在做作业的学生人数。形式上，返回能够使 queryTime 处于区间 [startTime[i], endTime[i]]（含）的学生人数。

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
	let answer = 0
    // 遍历，并非算法题
	for (let i = 0; i < startTime.length; i++) {
		if (startTime[i] <= queryTime && endTime[i] >= queryTime) answer++
	}
	return answer
}

let startTime = [1, 2, 3]
let endTime = [3, 2, 7]
let queryTime = 4
console.log(busyStudent(startTime, endTime, queryTime)) // 1

startTime = [4]
endTime = [4]
queryTime = 4
console.log(busyStudent(startTime, endTime, queryTime)) // 1

startTime = [4]
endTime = [4]
queryTime = 5
console.log(busyStudent(startTime, endTime, queryTime)) // 0

startTime = [1, 1, 1, 1]
endTime = [1, 3, 2, 4]
queryTime = 7
console.log(busyStudent(startTime, endTime, queryTime)) // 0

startTime = [9, 8, 7, 6, 5, 4, 3, 2, 1]
endTime = [10, 10, 10, 10, 10, 10, 10, 10, 10]
queryTime = 5
console.log(busyStudent(startTime, endTime, queryTime)) // 5
