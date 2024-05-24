/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let t = [0, 1, 1];
    if (n === 0) return 0;
    if (n === 1 || n === 2) return t[n];
    for (let i = 3; i <= n; i++) {
        t[i] = t[i - 1] + t[i - 2] + t[i - 3];
    }
    return t[n];
};