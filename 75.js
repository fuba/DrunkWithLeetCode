/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p_0 = 0;
    let p_2 = nums.length-1;
    let swap = (i, j) => {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };
    
    let head_0 = true;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            while (nums[p_0] == 0) {
                p_0++;
            }
            if (p_0 > nums.length - 1) continue;
            if (nums[i] < nums[p_0] && i > p_0) {
                swap(p_0++, i);
                i--;
            }
        }
        else if (nums[i] == 2) {
            while (nums[p_2] == 2) {
                p_2--;
            }
            if (p_2 < 0) continue;
            if (nums[i] > nums[p_2] && i < p_2) {
                swap(p_2--, i);
                i--;
            }
        }
    }

    return nums;
};
