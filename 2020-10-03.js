/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let n2i = {};
    let i = 0;
    nums.forEach((n) => {
        if (n2i[n] == null) n2i[n] = 1;
        else n2i[n]++;
        i++;
    });

    let j = 0;
    let d2j = {};
    nums.forEach((a) => {
        let b = k + a;
        if (!n2i[b]) return;

        let test = (s, l) => {
            let soeji = ''+l+'_'+s;
            if (d2j[soeji] == null) {
                if (s != l || (s == l && n2i[s] >= 2)) {
                    d2j[soeji] = j;
                    j++;
                    if (s == l) n2i[s]--;
                }
            }
        };

        let arg = [a, b].sort();
        test(arg[0], arg[1]);
    });

    return j;
};
