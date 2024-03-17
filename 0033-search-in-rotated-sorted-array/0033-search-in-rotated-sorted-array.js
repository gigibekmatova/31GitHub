/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   let count = 0,
        curIndex = 0,
        preIndex = 0,
        larger = true,
        numslen = nums.length;
        
    if (numslen === 0) {
        return -1;
    }
    if (nums[0] < target) {
        larger = false;
    }
    
    while (count < numslen) {
        // Found the target
        if (nums[curIndex] === target) {
            return curIndex;
        } else if (nums[curIndex] > target) {
            if (!larger || nums[curIndex] > nums[preIndex]) {
                return -1;
            }
            
            preIndex = curIndex;
            curIndex = (curIndex-1+numslen)%numslen;
        } else {
            if (larger || nums[curIndex] < nums[preIndex]) {
                return -1;
            }
            
            preIndex = curIndex;
            curIndex = (curIndex+1)%numslen;
        }
        
        count += 1;
    }
    
    return -1;
};

const search_2 = (nums, target) => {
    let lo = 0, hi = nums.length - 1;

    while (lo < hi) {
        let mid = (lo + hi) >> 1;

        if (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) {
            lo = mid + 1;
        } else if (target < nums[0] && target > nums[mid]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }

    return lo == hi && nums[lo] == target ? lo : -1; 
};