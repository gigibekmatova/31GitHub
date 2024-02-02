/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
        const rows = board.length;
    const cols = board[0].length;
    
    const dfs = (row, col, index) => {
        if (index === word.length) {
            return true; // All characters in the word found
        }
        
        if (
            row < 0 || row >= rows ||
            col < 0 || col >= cols ||
            board[row][col] !== word[index]
        ) {
            return false; // Out of bounds or character mismatch
        }
        
        const temp = board[row][col];
        board[row][col] = '#'; // Mark cell as visited
        
        // Explore adjacent cells
        const found = (
            dfs(row + 1, col, index + 1) ||
            dfs(row - 1, col, index + 1) ||
            dfs(row, col + 1, index + 1) ||
            dfs(row, col - 1, index + 1)
        );
        
        board[row][col] = temp; // Backtrack
        
        return found;
    };
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) {
                return true; // Word found
            }
        }
    }
    
    return false; // Word not found
};