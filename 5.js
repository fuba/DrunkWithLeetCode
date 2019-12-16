/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let palStrLenC = (sA, s) => {
        let w = 0;
        do {
            //console.log('c', sA, s, w);
            if (s+w >= sA.length) break;
            if (s-w < 0) break;
            if (sA[s+w] != sA[s-w]) break;
            w++;
        } while (1);
        w -= 1;
        if (w <= 0) {
            return {
                len: 1,
                str: sA[s]
            };
        }
        return {
            len: 1 + 2 * w,
            str: sA.slice(s-w, s+w+1).join('')
        };
        
    };
    let palStrLenB = (sA, s) => { // s は左側
        if (sA[s] != sA[s+1]) {
            return {
                len: 0,
                str: ''
            };
        }
        let w = 1;
        do {
            //console.log('b', sA, s, w);
            if (s+w >= sA.length) break;
            if (s-w < 0) break;
            if (sA[s+w+1] != sA[s-w]) break;
            w++;
        } while (1);
        w -= 1;
        return {
            len: 2 * (w+1),
            str: sA.slice(s-w, s+w+2).join('')
        };
    };
    
    
    let sA = s.split('');
    // char centric
    let maxLen = {
        len: 0,
        str: ''
    };
    for (let i = 0; i < sA.length; i++) {
        if (i + Math.floor(maxLen / 2) > sA.length) continue;
        let ret = palStrLenC(sA, i);
        if (ret.len > maxLen.len) maxLen = ret;
    }
    // border centric
    for (let i = Math.floor(maxLen.len / 2); i < sA.length - 1; i++) {
        if (i + Math.floor(maxLen.len / 2) > sA.length) continue;
        let ret = palStrLenB(sA, i);
        if (ret.len > maxLen.len) maxLen = ret;
    }
    return maxLen.str;
};
