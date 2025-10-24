/**
 * 122. 买卖股票的最佳时机 II
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/
 */

function maxProfit(prices: number[]): number {
    // 贪心，涨了就卖
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const todayProfit = prices[i] - prices[i - 1];
        if (todayProfit > 0) {
            maxProfit += todayProfit;
        }
    }
    return maxProfit;
};

// 7
console.log(maxProfit([7, 1, 5, 3, 6, 4]));