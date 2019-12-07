/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(/\s+/).reverse().join(" ").replace(/\s+$/, '').replace(/^\s+/, '');
};
