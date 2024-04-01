/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const row = board.length, col = board[0].length;
    
    for(let n = 0; n < col; n++) {
        flag(0, n);
        flag(row - 1, n);
    }

    for(let m = 0; m < row; m++) {
        flag(m, 0);
        flag(m, col - 1);
    }
    
    function flag(r, c) {
        if(r < 0 || c < 0 || r == row || c == col || board[r][c] != "O") return
        board[r][c] = "A";
        flag(r + 1, c);
        flag(r - 1, c);
        flag(r, c + 1);
        flag(r, c - 1);
    }
    
    for(let m = 0; m < row; m++)
        for(let n = 0; n < col; n++) {
            if(board[m][n] == "O") board[m][n] = "X";
            else if(board[m][n] == "A") board[m][n] = "O";
        }
     
};