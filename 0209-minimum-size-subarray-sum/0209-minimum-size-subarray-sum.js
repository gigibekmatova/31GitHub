/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  const n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
      sum += nums[i];
      while (sum >= target) {
          ans = Math.min(ans, i + 1 - left);
          sum -= nums[left++];
      }
  }
  return (ans != Number.MAX_SAFE_INTEGER) ? ans : 0;
};