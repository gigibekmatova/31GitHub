/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
   let bits = 31,
        divs = Math.pow(2, 31),
        res = 0;
    
    for ( ; n !== 0; ) {
        let judge = Math.floor(n/divs);
        if (judge) {
            res += Math.pow(2, 31-bits);
        }
        n = n%divs;
        divs /= 2;
        bits -= 1;
    }
    
    return res;  
};