/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        // Swap numbers if current number is not equal to val
        if (nums[j] !== val) {
            nums[i] = nums[j];
            // Index where numbers that are equal to val begin in the array
            i++;
        }
    }
    return i;
};