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
var averageOfLevels = function(root) {
    root.level = 0
  let q = [root]
  let ans = []
  let [sum, num, curLevel] = [0, 0, 0]

  while (q.length) {
    let item = q.shift()
    if (item.level === curLevel) {
      sum += item.val 
      num += 1
    } else {
      ans.push(sum / num)
      curLevel += 1
      sum = item.val
      num = 1
    }

    if (item.left) {
      item.left.level = item.level + 1
      q.push(item.left)
    }
    if (item.right) {
      item.right.level = item.level + 1
      q.push(item.right)
    }
  }

  ans.push(sum / num)
  return ans
};