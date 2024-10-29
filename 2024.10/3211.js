// 3211. 生成不含相邻零的二进制字符串
// https://leetcode.cn/problems/generate-binary-strings-without-adjacent-zeros/

// 给你一个正整数 n。
// 如果一个二进制字符串 x 的所有长度为 2 的子字符串中包含 至少 一个 "1"，则称 x 是一个 有效 字符串。
// 返回所有长度为 n 的 有效 字符串，可以以任意顺序排列。

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
    const answer = [];
    const path = [];

    /**
     * 回溯
     * @param {number} i 当前字符串长度
     */
    const backtrack = (i) => {
        // 边界条件：满足长度
        if (i === n) {
            answer.push(path.join(""));
            return;
        }

        // 选择"1"
        path[i] = 1;
        backtrack(i + 1);

        // 选择"0"
        if (i === 0 || path[i - 1] === 1) {
            path[i] = 0;
            backtrack(i + 1);
        }

        // 无需撤销选择
    };

    backtrack(0);
    return answer;
};

// 长度为 3 的有效字符串有："010"、"011"、"101"、"110" 和 "111"。
console.log(validStrings(3)); // ["010","011","101","110","111"]
