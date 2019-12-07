/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let max_p = null;
    for (let i = prices.length - 1; i >= 0; i--) {
        let p = prices[i];
        if (max_p == null) max_p = p;
        else if (max_p < p) max_p = p;

        let diff = max_p - p;
        if (diff > max) max = diff;
    }
    
    return max;
};

