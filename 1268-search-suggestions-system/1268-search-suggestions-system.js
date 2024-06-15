/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
   let str = ""
    products.sort()
    return [...searchWord].map((c) => {
        str = `${str}${c}`;
        const resArr =  products.filter((product) => product.startsWith(str));
        return resArr.length > 3 ? resArr.slice(0, 3) : resArr;
    });
};