
var RandomizedSet = function() {
    this.container = new Set()
};

RandomizedSet.prototype.insert = function(val) {
    if(this.container.has(val)) return false
    else{
        this.container.add(val)
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    return this.container.delete(val) 
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let index = Math.floor(Math.random() * this.container.size)
    let arr = [...this.container]
    return arr[index]   
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */