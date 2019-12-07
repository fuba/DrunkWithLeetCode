/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pointer = head;
    if (!pointer || !pointer.next) return head;

    let prev = null;
    do {
        let target = pointer;
        pointer = pointer.next;
        target.next = prev;
        prev = target;
    } while (pointer.next);
    pointer.next = prev;

    return pointer;
};
