/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const d = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    };

    let i = 0;
    let p = 0;
    let l = s.length;
    
    while (i < l) {
        let c = s.charAt(i);
        let diff = d[c];
        if (i < l - 1) {
            let n = s.charAt(i + 1);
            if (d[c+n]) {
                diff = d[c+n];
                i++;
            }
        }
        p += diff;
        i++;
    }
    return p;
};
