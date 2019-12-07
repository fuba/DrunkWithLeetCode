/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function(board, word) {
    let wa = word.split('');
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (bfsMatch(wa, board, i, j, board.length - 1, board[i].length - 1))
                return true;
        }
    }
    return false;
};

let hi = (i, j) => { return i.toString()+'_'+j.toString(); };
let clone = (obj) => {
    let c = {};
    // console.log(obj)
    Object.assign(c, obj);
    return c;
};

let bfsMatch = (wa, board, orig_i, orig_j, max_i, max_j) => {
    let w_i_orig = 0;

    let hist = {};
    let queue = [ [w_i_orig, orig_i, orig_j, hist] ];
    do {
        let p = queue.pop();
        // console.log(p)
        let w_i = p[0];
        let i = p[1];
        let j = p[2];
        let h = p[3];
        
        let h_i = hi(i, j);
        if (h[h_i]) continue;

        h[h_i] = true;

        if (wa[w_i] != board[i][j]) continue;
        if (w_i == wa.length - 1) return true;
        
        if (i - 1 >= 0)
            queue.push([w_i + 1, i - 1, j, clone(h)]);
        if (i + 1 <= max_i)
            queue.push([w_i + 1, i + 1, j, clone(h)]);
        if (j - 1 >= 0)
            queue.push([w_i + 1, i, j - 1, clone(h)]);
        if (j + 1 <= max_j)
            queue.push([w_i + 1, i, j + 1, clone(h)]);
    } while (queue.length > 0);
    
    return false;
};
