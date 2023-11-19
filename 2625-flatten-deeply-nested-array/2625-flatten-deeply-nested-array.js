/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const res = [];
   const stack = [];
   stack.push({item: arr, depth: n});
   while(stack.length > 0) {
       let {item, depth} = stack.pop();
       if (!Array.isArray(item) || depth < 0) {
           res.push(item);
       } else {
           for(let i = item.length - 1; i >= 0; i--) {
               stack.push({item: item[i], depth: depth-1});
           }
       }
   }
   return res;
};