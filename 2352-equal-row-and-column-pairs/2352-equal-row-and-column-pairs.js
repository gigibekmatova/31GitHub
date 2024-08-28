/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let res = 0
    for (let i = 0; i < grid.length; ++i) {
        let row = grid[i].join()
        for (let j = 0; j < grid.length; ++j) {
            let col = grid.map((v) => v[j]).join()
            if (col == row) {
                res++
            }
        }
    }
    return res
};