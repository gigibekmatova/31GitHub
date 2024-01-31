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
 * @return {number}
 */
var getMinimumDifference = function(root) {
   const DFS = (node, lo, hi) => {
        if (!node) return hi - lo;
        const left = DFS(node.left, lo, node.val);
        const right = DFS(node.right, node.val, hi);
        return Math.min(left, right);
    };
    return DFS(root, -Infinity, Infinity); 
};