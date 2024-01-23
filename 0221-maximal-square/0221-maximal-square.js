/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const rows = matrix.length, cols = rows > 0 ? matrix[0].length : 0;
        const dp = Array(rows + 1).fill(0).map(() => Array(cols + 1).fill(0));

        let maxsqlen = 0;
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                
                if (matrix[i-1][j-1] == '1'){
                    
                    dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
                    maxsqlen = Math.max(maxsqlen, dp[i][j]);
                }
            }
        }
        return maxsqlen * maxsqlen;
};