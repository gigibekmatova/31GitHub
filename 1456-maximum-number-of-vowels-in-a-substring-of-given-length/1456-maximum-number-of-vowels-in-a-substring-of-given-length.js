/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = "aeiou";
    const n = s.length;
    let start = 0;
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < n; i++) {

        if (vowels.includes(s[i])) {
            sum += 1;
        }

        if (i - start + 1 === k) {
            maxSum = Math.max(sum, maxSum);
            if (vowels.includes(s[start])) {
                sum--;
            }
            start++;
        }
    }

    return maxSum;
};