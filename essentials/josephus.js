/**
 * 约瑟夫环问题，公式：fn(n,m) = [f(n-1,m)+m]%n
 * @param {number} n 多少个人
 * @param {number} m 每轮的第几个人出列
 * @returns {number}
 */
function josephus(n, m) {
    let answer = 0
    // DP，算出1个人时的结果到41个人时的结果
    for (let i = 1; i <= n; i++) {
        answer = (answer + m) % i
    }
    return answer + 1
}

console.log(josephus(41, 2)) // 19
