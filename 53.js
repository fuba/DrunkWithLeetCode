/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const l = nums.length;
    let max = null;
    if (l == 1) return nums[0];
    for (var i=0; i<l; i++) {
        let memo = [];
        for (var j=i; j<l; j++) {
            let sum = 0;
            if (i == j) {
                sum = memo[j] = nums[j];
            }
            else {
                sum = memo[j] = memo[j-1] + nums[j];
            }
            //console.log([i,j,sum])
            if (max == null || max < sum) max = sum;
        }
    }
    return max;
};
