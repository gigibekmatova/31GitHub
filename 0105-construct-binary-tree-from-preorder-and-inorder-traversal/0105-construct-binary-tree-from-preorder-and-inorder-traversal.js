/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
   return dfs(0, 0, preorder.length - 1);

  // the subTree values whose node value is preorder[index]
  // inorder[startPos] - inorder[endPos]
  function dfs(index, startPos, endPos) {
    if (startPos > endPos)
      return null;

    var node = new TreeNode(preorder[index]);
    var pos = inorder.indexOf(preorder[index], startPos);

    // node's left subNode's value is preorder[index + 1]
    // node's right subNode's value is preorder[index + pos - startPos + 1]
    node.left = dfs(index + 1, startPos, pos - 1);
    node.right = dfs(index + pos - startPos + 1, pos + 1, endPos);

    return node;
  } 
};