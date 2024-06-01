/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let arr=[]
    let temp
    function conTo(temp){
               temp=temp.split("")
               let sum=0
               for(let k=0;k<temp.length;k++){
                   if(temp[k]==1){
                       sum++
                   }
               }
               return sum
    }

    for(let i=0;i<n+1;i++){
        temp=i.toString(2)
        arr.push(conTo(temp))
    }
    return arr  
};