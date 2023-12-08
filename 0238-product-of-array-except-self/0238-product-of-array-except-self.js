/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let carry = 1;
    const output = Array(nums.length).fill(1);
    for(let i = 0; i < nums.length;i++){
        output[i]*=carry
        carry*=nums[i]
    };
    carry = 1;
    for(let i = nums.length-1; i >= 0; i--){
        output[i]*=carry
        carry*=nums[i]
    }
    return output;
};