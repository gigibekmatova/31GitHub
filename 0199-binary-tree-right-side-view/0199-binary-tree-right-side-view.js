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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];

  var ans = []
    , tmp = [root];

  while (tmp.length) {
    var res = []
      , a = [];

    for (var i = 0, len = tmp.length; i < len; i++) {
      if (!tmp[i]) continue;
      res.push(tmp[i].val);
      a.push(tmp[i].left);
      a.push(tmp[i].right);
    }

    tmp = a.concat();
    if (res.length)
      ans.push(res);
  }

  var a = [];
  ans.forEach(function(item) {
    a.push(item.pop());
  });

  return a;  
};