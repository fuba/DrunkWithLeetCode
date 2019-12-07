/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //console.log((x+'').split('').reverse().join(''));
    if (!isInLimitation(x)) return 0;
    
    let n = x + '';
    let nA = n.split('');
    let minus = '';
    if (nA[0] == '-') {
        minus = nA.shift();
    }
    let nAR = nA.reverse();
    //console.log(nAR);
    while (nAR[0] == '0') {
        nAR.shift();
    }
    
    let str = minus + nAR.join('');
    //console.log(str);
    if (!isInLimitation(parseInt(str))) return 0;
    return str;
};

var isInLimitation = function (x) {
    if (x > Math.pow(2, 31) - 1 || x < -1 * Math.pow(2, 31)) return false;
    return true;
}
