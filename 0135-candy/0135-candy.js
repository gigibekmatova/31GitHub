/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(R) {
    let n = R.length;

    let C = new Array(n).fill(1); // candies
    for (let i = 1; i < n; i++)
        if (
            R[i] > R[i - 1] && //
            !(C[i] > C[i - 1])
        )
            C[i] = (C[i - 1] || 0) + 1;

    for (let i = n - 2; i >= 0; i--)
        if (
            R[i] > R[i + 1] && //
            !(C[i] > C[i + 1])
        )
            C[i] = C[i + 1] + 1;

    return C.reduce((total, e) => total + e, 0);
};