/**
 * 函数科里化求和
 * @param  {...number[]} nums
 */
function sum(...nums) {
    const calculate = (...nextNums) => {
        nums.push(...nextNums)
        return calculate
    }
    calculate.sumof = () => {
        return nums.reduce((ansr, num) => ansr + num, 0)
    }
    return calculate
}

console.log(sum(1, 2, 3)(4)(5).sumof()) // 15
