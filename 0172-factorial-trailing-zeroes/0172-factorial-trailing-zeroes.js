/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var ans = 0;
  while (n) {
  	ans += ~~(n / 5);
  	n /= 5;
  	n = ~~n;
  }

  return ans;
};