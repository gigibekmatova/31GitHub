/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let result = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            k -= 1;
        }

        if (k < 0) {
            k = nums[left] === 0 ? k + 1 : k;
            left += 1;
        }

        right += 1;
    }

    return right - left;
};