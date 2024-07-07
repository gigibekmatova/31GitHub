/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a-b);
    let count = 0;
    let left = 0, right = nums.length-1;
    while(left < right){
        const tempSum = nums[left] + nums[right];
        if(tempSum == k) {
            count++;
            left ++;
            right --;
        }else if (tempSum < k){
            left++;
        }else{
            right --;
        }
    }
    return count;
};