/**
 * 20. 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-100-liked
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const pair = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (const char of s) {
        // 入栈
        if (char in pair) {
            stack.push(char);
            continue;
        }
        // 出栈不匹配
        if (char !== pair[stack.pop()]) {
            return false;
        }
        // 出栈
    }

    // 检查是否全部出栈
    return stack.length === 0;
};

// true
console.log(isValid("([])"));