/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let maxs = [];
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        getMax(nums, maxs, i);
        if (max < maxs[i]) {
            max = maxs[i];
        }
    }
    return max;
};

var getMax = function (nums, maxs, i) {
    let max = nums[i];

    if (i >= 1) {
        if (max < maxs[i-1]) max = maxs[i-1];
    }

    if (i >= 2 && max < nums[i] + maxs[i-2]) {
        max = nums[i] + maxs[i-2];
    }

    maxs[i] = max;
    return max;
};
