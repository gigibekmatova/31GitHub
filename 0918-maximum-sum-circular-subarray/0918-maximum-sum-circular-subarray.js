/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let preMin = nums[0];
    let preMax = nums[0];
    let max = nums[0];
    let min = nums[0];
    let total = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let n = nums[i];
        preMax = Math.max(n, n+preMax);
        max = Math.max(max,preMax)
        preMin = Math.min(n,preMin+n);
        min = Math.min(min,preMin)   
        total+=n; 
    }
    return max < 0 ? max : Math.max(max ,total - min)
};