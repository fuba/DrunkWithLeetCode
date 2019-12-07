/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numhash = {};
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var ok_i = numhash[target-num];

        if (ok_i != undefined) {
            return [ok_i, i];
        }

        numhash[num] = i;
    }
};

