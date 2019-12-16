/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freq = {};
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (!freq[c]) freq[c] = 0;
        freq[c]++;
    }
    return Object.
        keys(freq).
        sort((a, b) => {
            return (freq[a] == freq[b]) ? 0 : (freq[a] < freq[b]) ? 1 : -1;
        }).
        map((c) => { return c.repeat(freq[c]) }).
        join('');
};
