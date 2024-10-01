/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closestSum = Number.MAX_SAFE_INTEGER;
    let closestDifference = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let currentSum = nums[i] + nums[j] + nums[k];
                let currentDifference = Math.abs(currentSum - target);

                if (currentDifference < closestDifference) {
                    closestDifference = currentDifference;
                    closestSum = currentSum;
                }
            }
        }
    }

    return closestSum;
};