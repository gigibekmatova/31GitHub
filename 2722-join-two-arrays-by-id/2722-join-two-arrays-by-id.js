/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  retVal = new Map();

  [...arr1,...arr2].map( val =>
    retVal.set(val.id, {...retVal.get(val.id),...val})
    );  

  return Array.from(retVal.values()).sort( (a,b) => a.id - b.id);  
};