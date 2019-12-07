/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    if (head.val == 'last') {
        return true;
    }
    head.val = 'last';
    return hasCycle(head.next);
};
