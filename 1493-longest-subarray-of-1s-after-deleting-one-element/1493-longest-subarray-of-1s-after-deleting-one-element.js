/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0
    let k = 1
    let maxLength = 0

    for(let right = 0 ; right < nums.length; right++){
        if (nums[right] === 0) k-=1

        while(k < 0){
            if (nums[left] === 0) k+=1
            left += 1
        }

        maxLength = Math.max(maxLength, right - left)
    }
    return maxLength
};