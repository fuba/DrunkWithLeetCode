/**
 * @param {string} s
 * @return {string}
 */

let c2code = {};
const toCode = (char) => {
    if (c2code[char]) return c2code[char];
    return c2code[char] = ( 2 ** ( char.charCodeAt(0) - 97 ) );
};

let occs = {};
const str2occ = (str) => {
    if (occs[str]) return occs[str];
    let r = 0;
    for (let i = 0; i < str.length; i++) {
        r |= toCode(str.charAt(i));
    }
    occs[str] = r;
    return r;
};

const isAsInt = (a, b) => {
    return (parseInt(a) == parseInt(b));
};

const removeDuplicateLetters = function(s) {
    const debug = false;
    let globalChars = str2occ(s);
    let sA = s.split('');

    let getStr = (initialPointer, restChars, ignoreChars) => {
        let pointer = initialPointer;

        let smallestC = null;
        let next;
        while (true) {
            let c = sA[pointer];
            
            let charsIndex = str2occ(s.substr(pointer, s.length));
            if (
                isAsInt(restChars & charsIndex, restChars)
                && !(ignoreChars & toCode(c))
            ) {
                if (!smallestC || smallestC > c) {
                    smallestC = c;
                    next = [pointer, c];
                }
            }

            pointer++;

            if (
                !isAsInt(restChars & charsIndex, restChars)
                || s.length - 1 < pointer
            ) {
                break;
            }
        }

        if (next) {
            let [candI, candC] = next;
            let candCAsbit = toCode(candC);
            let newRestChars = restChars & ~candCAsbit;
            let newIgnoreChars = ignoreChars | candCAsbit;
            if (newRestChars == 0) {
                return candC;
            }
            else {
                return candC + getStr(candI + 1, newRestChars, newIgnoreChars);
            }
        }
        return "";
    };

    return getStr(0, globalChars, 0)
};
