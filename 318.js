/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    if (words.length < 2) return 0;

    let wmap = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        let wordbit = 0;
        for (let i = 0; i < word.length; i++) {
            wordbit = wordbit | Math.pow(2, (word.charCodeAt(i) - 97));
        }
        wmap[i] = wordbit;
    };

    let max = 0;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let tempMax = words[i].length * words[j].length;
            if (max < tempMax && !(wmap[i] & wmap[j])) {
                max = tempMax;
            }
        }
    }
    return max;
};
