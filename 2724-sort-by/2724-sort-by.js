/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  if (arr.length <= 1) return arr
    const left = []
    const right = []
    const mid_index = Math.floor(arr.length/2)
    for (let i = 0; i < arr.length; i++) {
        let cur = fn(arr[i])
        let mid = fn(arr[mid_index])
        if(cur === mid) continue
        else if(cur < mid) left.push(arr[i])
        else right.push(arr[i])
    }
    return sortBy(left, fn).concat([arr[mid_index]], sortBy(right, fn))  
};