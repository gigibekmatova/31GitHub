/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let averageValue = -Infinity
    let left = 0
    let sum = 0
    for(let right = 0; right < nums.length; right++){
        sum += nums[right]
        if(right - left +1 === k){
            averageValue = Math.max(averageValue, sum/k)
    
            sum -= nums[left]
            left++
        }
    }
    return averageValue  
};