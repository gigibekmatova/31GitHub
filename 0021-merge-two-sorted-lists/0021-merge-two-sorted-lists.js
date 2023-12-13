/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const arr = [];

  while (list1 !== null || list2 !== null) {
    if (list1) {
      arr.push(list1.val);
      list1 = list1.next;
    }
    if (list2) {
      arr.push(list2.val);
      list2 = list2.next;
    } 
  }

  arr.sort((a, b) => a - b);

  arr.forEach((el, index) => {
    arr[index] = new ListNode(el);
    if (index > 0) {
      arr[index - 1].next = arr[index];
    }
  });
if (arr[0]) {
    return arr[0];
  }
  return null
};