/**
 * @param {number[]} nums
 * @return {number[]}
 */
let products = [];

const productExceptSelf = function(nums) {
    products = [];
    if (nums.length == 2) return nums.reverse();
    const numsPadded = padNums(nums);
    let r = createResultArray(numsPadded);
    let result = [];
    searchResultArray(r.resultArray.concat(numsPadded), r.maxDepth, 1, 0, 0, 0);
    return products.slice(0, nums.length);
};

const padNums = (nums) => {
    let r = [];
    let p = Math.log2(nums.length);
    if (p % 1 == 0) {
        return nums;
    }
    let newLen = Math.pow(2, Math.ceil(p));
    let pad = [];
    for (let i = 0; i < newLen - nums.length; i++) {
        pad.push(1);
    }
    return nums.concat(pad);
};

const searchResultArray = (resultArray, maxDepth, result, start, pointer, depth) => {
    if (maxDepth + 1 < depth) {
        products.push(result);
        return;
    }

    searchResultArray(resultArray,
                      maxDepth,
                      result * resultArray[start + 2 * pointer + 1],
                      end + 1,
                      2 * pointer,
                      depth + 1);
    searchResultArray(resultArray,
                      maxDepth,
                      result * resultArray[start + 2 * pointer],
                      end + 1,
                      2 * pointer + 1,
                      depth + 1);
};

const createResultArray = (nums) => {
    let numsTarget = nums;
    let result = [];
    let i = 0;
    let depth = 0;
    while (true) {
        let tempResult = [];
        for (let j = 0; j < numsTarget.length / 2; j++) {
            let r = numsTarget[2*j] * numsTarget[2*j+1];
            tempResult.push(r);
        }
        result = tempResult.concat(result);
        if (tempResult.length == 2) return {
            resultArray: result,
            maxDepth: depth
        };
        numsTarget = tempResult;
        depth++;
    }
};

