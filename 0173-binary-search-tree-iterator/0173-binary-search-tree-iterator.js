/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.arr = [];
    const go = (node) => {
        if (!node) return;
        go(node.left);
        this.arr.push(node.val);
        go(node.right);
    }
    go(root);   
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
 return this.arr.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
   return this.arr.length > 0; 
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */