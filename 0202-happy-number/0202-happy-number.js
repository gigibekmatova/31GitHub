/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n;
    let fast = n;
    
    do {
        slow = squareSum(slow);
        fast = squareSum(squareSum(fast));
    } while (slow !== fast);
    
    return fast === 1;
};

var squareSum = function(n) {
    let sum = 0;
    while(n) {
        sum += (n % 10) * (n % 10);
        n = parseInt(n / 10);
    }
    return sum;
};