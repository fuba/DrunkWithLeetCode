/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function(paragraph, banned) {
    let b = {};
    let c = {};
    let min = 0;
    let minStr = '';
    banned.forEach((w) => { b[w] = true });
    paragraph.toLowerCase().split(new RegExp('[^a-z]+')).
        forEach((s) => {
            if (b[s]) return;
            if (!s) return;

            if (!c[s]) c[s] = 0;
            c[s]++;
            if (c[s] > min) {
                minStr = s;
                min = c[s];
            }
        });
    return minStr;
};
