/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++)
        // Trim the prefix until it fits in the front of the current word
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            // If we cannot trim down the prfix to fit in the word then we have no common prefix amoung words in str
            if (prefix.length===0) return "";
        }        
    return prefix;
};