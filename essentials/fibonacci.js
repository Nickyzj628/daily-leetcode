/**
 * 斐波那契数列
 *
 * F(0) = 0
 *
 * F(1) = 1
 *
 * F(n) = F(n-1) + F(n-2)（对于 n ≥ 2）
 *
 * @param {number} n
 */
function fibonacci(n) {
    if (n < 2) return n;
    // 从空间上把Array(n)优化到n-1和n-2两个变量
    let pre = 0;
    let pre2 = 1;
    // 自底向上计算，从时间上去除了重复计算
    for (let i = 2; i <= n; i++) {
        let cur = pre + pre2;
        pre2 = pre;
        pre = cur;
    }
    return pre;
}

console.log(fibonacci(10)); // 34
