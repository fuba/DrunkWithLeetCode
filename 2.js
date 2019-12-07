/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l1p = l1;
    var l2p = l2;
    var up = 0;
    var h = {};
    var p = h;
    var empty = { val: 0, next: null };
    while (1) {
        var v = l1p.val + l2p.val + up;
        up = 0;
        if (v >= 10) {
            up = 1;
            v -= 10;
        }
        p.val = v;
        if (l1p.next == null && l2p.next == null) {
            if (up) {
                p.next = {val:1};
            }
            break;
        };
        p.next = {};
        p = p.next;
        l1p = l1p.next != null ? l1p.next : empty;
        l2p = l2p.next != null ? l2p.next : empty;
    }
    
    return h;
};
