/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var p1 = 0, p2 = 0;
    var i = 0;
    var all = nums1.length + nums2.length;

    var middle = Math.floor(all / 2);
    var two_flag = true;
    if (all % 2 == 1) {
        two_flag = false;
    }

    var sum = 0;
    while (true) {
        var r = 0;
        if (nums2[p2] == null && nums1[p1] == null) {
            break;
        }
        if (
            (nums2[p2] == null && nums1[p1] != null)
            || nums1[p1] < nums2[p2]
        ) {
            r = nums1[p1];
            p1++;
        }
        else {
            r = nums2[p2];
            p2++;
        }

        if (two_flag && i == middle - 1) {
            sum += r;
        }

        if (i == middle) {
            if (sum) {
                return (sum + r) / 2;
            }
            return r;
        }

        i++;   
    }
    
};
