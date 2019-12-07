/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    if (words.length == 1) return true;
    
    let c2o = [];
    let c2o_i = 0;
    order.split('').forEach((c) => {
        c2o[c] = c2o_i++;
    });
    let comp = (w1, w2) => {
        for (let i = 0; i < Math.min(w1.length, w2.length); i++) {
            if (c2o[w1.charAt(i)] > c2o[w2.charAt(i)]) {
                return false;
            }
            if (c2o[w1.charAt(i)] < c2o[w2.charAt(i)]) {
                return true;
            }
        }
        return null;
    };
    let trueCount = 0;
    for (let j = 0; j < words.length - 1; j++) {
        let compResult = comp(words[j], words[j+1]);
        if (compResult == true) {
            trueCount++;
        }
        else if (compResult == false) {
            return false;
        }
    }
    if (trueCount > 0) return true;
    return false;
};
