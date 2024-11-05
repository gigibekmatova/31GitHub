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
var longestZigZag = function(root) {
    var maxZigZag = 0;
    function dfs(root, zig, zigzag) {
        if(root == null)
            return;
        maxZigZag = Math.max(maxZigZag, zigzag);
        dfs(root.left, -1, 1 + ((zig == 1) ? zigzag : 0));
        dfs(root.right, 1, 1 + ((zig == -1) ? zigzag : 0));
    };
    dfs(root, 0, 0);
    return maxZigZag;
};