/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  return arr.filter(fn)
};
const arr = [0, 10, 20, 30]  

function greaterThan10(n) {
return n > 10
};

const valores = filter(arr, greaterThan10)
console.log(valores)