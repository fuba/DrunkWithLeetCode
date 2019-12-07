/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxlen = 0;
    if (s.length == 1) return 1;    
    for (var i = 0; i < s.length - 1; i++) {
        var charhash = {};
        TAIL: for (var j = i+1; j <= s.length; j++) {
            var ss = s.substring(i, j);
            var tail = s.substring(j-1, j);
            if (charhash[tail]) {
                break TAIL;
            }
            charhash[tail] = true;
            if (ss.length > maxlen) {
                maxlen = ss.length;
            }
        }
    }
    return maxlen;
};
