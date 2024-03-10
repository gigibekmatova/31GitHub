/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let len = nums.length,
        ans = 0;

    for (let i = 0; i < 32; i++) {
        let tmp = 0;

        for (let j = 0; j < len; j++) {
            if ((nums[j] >> i) & 1 === 1) {
                tmp++;
            }
        }

        tmp %= 3;
        if (tmp) {
            ans |= tmp << i;
        }
    }

    return ans; 
};