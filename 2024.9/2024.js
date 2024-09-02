// 2024. 考试的最大困扰度
// https://leetcode.cn/problems/maximize-the-confusion-of-an-exam/

// 一位老师正在出一场由 n 道判断题构成的考试，每道题的答案为 true （用 'T' 表示）或者 false （用 'F' 表示）。老师想增加学生对自己做出答案的不确定性，方法是 最大化 有 连续相同 结果的题数。（也就是连续出现 true 或者连续出现 false）。
// 给你一个字符串 answerKey ，其中 answerKey[i] 是第 i 个问题的正确结果。除此以外，还给你一个整数 k ，表示你能进行以下操作的最多次数：
// 每次操作中，将问题的正确答案改为 'T' 或者 'F' （也就是将 answerKey[i] 改为 'T' 或者 'F' ）。
// 请你返回在不超过 k 次操作的情况下，最大 连续 'T' 或者 'F' 的数目。

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    // 滑动窗口，如果要找最大连续T的数量，就维护不超过k个F的窗口
    return Math.max(getAnswer(answerKey, k, "T"), getAnswer(answerKey, k, "F"))

    function getAnswer(answerKey, k, char) {
        let answer = 0
        let i = 0
        let j = 0
        let sum = 0
        while (j < answerKey.length) {
            if (answerKey[j] !== char) sum++
            while (sum > k) {
                if (answerKey[i++] !== char) sum--
            }
            answer = Math.max(answer, j - i + 1)
            j++
        }
        return answer
    }
}

console.log(maxConsecutiveAnswers("TTFF", 2)) // 4
console.log(maxConsecutiveAnswers("TFFT", 1)) // 3
console.log(maxConsecutiveAnswers("TTFTTFTT", 1)) // 5
