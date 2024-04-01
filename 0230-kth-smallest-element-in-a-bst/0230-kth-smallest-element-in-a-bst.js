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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var inorderTraversal = function(root) {
    if (!root) return [];

    var stack = [], ans = [];

    stack.push(root);

    while (stack.length) {
      var elem = stack[stack.length - 1];

      if (elem.left === 1) {
        elem.left = 0;
        ans.push(elem.val);
      } else if (elem.left) {
        stack.push(elem.left);
        elem.left = 1;
      } else if (elem.left === null) {
        elem.left = 1;
      } else if (elem.right) {
        stack.push(elem.right);
        elem.right = null;
      } else {
        stack.pop();
      }
    }

    return ans;
  };

  var ans = inorderTraversal(root);
  return ans[k - 1];
};