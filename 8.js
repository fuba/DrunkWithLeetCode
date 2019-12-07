/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let n = str.split('');
    if (n.length == 0) return 0;
    console.log(n)
    
    while (n[0] == ' ') {
        n.shift();
    }
    if (!isNumOrMinusOrPlus(n[0])) {
        return 0;
    }
    let isMinus = false;
    if (n[0] == '-') {
        n.shift();
        isMinus = true;
    }
    else if (n[0] == '+') {
        n.shift();
    }
    if (!isNum(n[0])) return 0;
    
    let r = [];
    while (isNum(n[0])) {
        r.push(n.shift());
    }
    var num = parseInt(r.join(''));
    if (isMinus) num *= -1;
    if (isOverMaxInt(num)) {
        return Math.pow(2, 31) - 1;
    }
    if (isUnderMinimumInt(num)) {
        return -1 * Math.pow(2, 31);   
    }
    return num;
};

var isOverMaxInt = function (num) {
    if (num > Math.pow(2, 31) - 1) return true;
    return false;
}

var isUnderMinimumInt = function (num) {
    if (num < -1 * Math.pow(2, 31)) return true;
    return false;
}

var isNumOrMinusOrPlus = function (str) {
    if (str == null) return false;
    if (str.match('^[0-9\-\+]$')) return true;
    return false;
}
    
var isNum = function (str) {
    if (str == null) return false;
    if (str.match('^[0-9]$')) return true;
    return false;
}

    
