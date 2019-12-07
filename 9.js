/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = '' + x;
    let len = str.length;
    
    if (x < 0) return false;
    if (len == 1) return true;
    let lenMax = Math.floor(len/2);
    
    for (let i=0;i<lenMax;i++) {
        if (str.charAt(i) != str.charAt(len - 1 - i)) {
            return false;
        }
    }
    return true;
};
