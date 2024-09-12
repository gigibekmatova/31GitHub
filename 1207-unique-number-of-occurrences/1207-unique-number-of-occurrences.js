/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
   let count ={}
    for(let i=0;i<arr.length;i++){
        let ele = arr[i]
        if(count[ele]){
            count[ele]++
        }else{
            count[ele] = 1
        }
    }
    console.log(count)
    let unique = new Set(Object.values(count));
    if(unique.size===Object.values(count).length){
        return true 
    }
    return false 
};