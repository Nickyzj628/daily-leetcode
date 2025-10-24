/**
 * 121. 买卖股票的最佳时机
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-100-liked
 */

function maxProfit(prices: number[]): number {
    // 暴力双层for循环
    // let result = 0;
    // for (let i = 0; i < prices.length - 1; i++) {
    //     const buy = prices[i];
    //     for (let j = i + 1; j < prices.length; j++) {
    //         const sell = prices[j];
    //         result = Math.max(result, sell - buy);
    //     }
    // }
    // return result;

    // 贪心，每次遍历记录至今的最低价格和最高利润
    let minCost = Infinity;
    let maxProfit = 0;
    for (const price of prices){
        minCost = Math.min(minCost, price);
        maxProfit = Math.max(maxProfit, price - minCost);
    }
    return maxProfit;
};

// 5
console.log(maxProfit([7, 1, 5, 3, 6, 4]));