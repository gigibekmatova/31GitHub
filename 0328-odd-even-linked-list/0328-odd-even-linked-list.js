/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head === null) return null
    
    let odd = head
    let even = head.next
    const evenStart = head.next
    
    while(even !== null && even.next !== null) {
        odd.next = odd.next.next
        even.next = even.next.next
        odd = odd.next
        even = even.next
    }
    odd.next = evenStart
    
    return head
};