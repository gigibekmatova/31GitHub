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
 * @return {TreeNode}
 */
var invertTree = function(root) {
   if (!root)
    return root;

  var left = root.left;

  var right = root.right;

  left && invertTree(left);

  right && invertTree(right);

  root.left = right;
  root.right = left;

  return root; 
};