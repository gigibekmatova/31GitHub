/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let distinctNums1=[...new Set(nums1)]
    let distinctNums2=[...new Set(nums2)]
    let answer=[[],[]]
    for(let i=0;i<distinctNums1.length;i++){
        if(!nums2.includes(distinctNums1[i])) answer[0].push(distinctNums1[i])
    }
    for(let i=0;i<distinctNums2.length;i++){
        if(!nums1.includes(distinctNums2[i])) answer[1].push(distinctNums2[i])
    }
    return answer  
};