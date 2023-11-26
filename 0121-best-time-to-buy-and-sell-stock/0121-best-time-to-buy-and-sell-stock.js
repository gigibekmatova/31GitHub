/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let min = prices[0]
    for(let i = 1; i < prices.length; i++){
        // The day we should buy at
        min = Math.min(min, prices[i-1])
        // Check if selling at the current day gives us the most profit
        profit = Math.max(prices[i]-min, profit)
    }
    return profit
};