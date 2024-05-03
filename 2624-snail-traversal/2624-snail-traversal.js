/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if(rowsCount * colsCount != this.length) return []
    let snailOrder = [...new Array(rowsCount)].fill().map((_, idx) => [])
    let isEven = false, idx = 0
    for (let i = 0; i < this.length; i += rowsCount) {
        isEven = !isEven
        idx = 0
        if(isEven) {
          for (let j = i; j < rowsCount + i; j++) {
            snailOrder[idx++].push(this[j])
          }
        }
        else {
           for (let j = i + (rowsCount - 1); j >= i; j--) {
            snailOrder[idx++].push(this[j])
          } 
        }
    }
    return snailOrder
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */