/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let getDict = (str) => {
        let dict = {};
        str.split('').forEach((c) => {
            if (!dict[c]) dict[c] = 1;
            else dict[c]++;
        });
        return dict;
    };
    const charsDict = getDict(chars);
    let sum = 0;
    words.forEach((str) => {
        const strDict = getDict(str);
        let ok = true;
        for (let c in strDict) {
            if (!charsDict[c] || charsDict[c] < strDict[c]) {
                ok = false;
                break;
            }
        }
        if (ok) sum += str.length;
    });
    return sum;
};
