/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
        const findNumber = (start, end) => {
        const mid = Math.floor((end + start)/2);
        if (guess(mid) === 0) return mid;
        if (guess(mid) === -1) return findNumber(start, mid - 1);
        if (guess(mid) === 1) return findNumber(mid + 1, end);
    }
        return findNumber(0, n);
};