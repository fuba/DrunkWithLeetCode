/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let a = matrix;
    let log = [];
    let max_i = a.length;
    if (max_i == 0) return [];
    let max_j;
    for (let i = 0; i < a.length; i++) {
        log[i] = [];
        if (!max_j) max_j = a[i].length;
    }
    if (max_i == 1) {
        return a[0];
    }

    let p = [0, 0];
    let dir = 0; // 0→ 1↓ 2← 3↑
    let dir_diff = [ // y, x
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    let nextdir = () => {
        dir++;
        if (dir >= 4) dir = dir % 4;
        move = dir_diff[dir];
    };

    let move, next0, next1;
    let setMove = () => {
        move = dir_diff[dir];
        next0 = p[0] + move[0];
        next1 = p[1] + move[1];
    };

    let count = 0;
    let result = [];
    while (true) {
        result.push(a[p[0]][p[1]]);
        log[p[0]][p[1]] = true;

        setMove();

        let loopMax = 3;
        if (
            (next0 > max_i - 1 || next0 < 0 || next1 > max_j - 1 || next1 < 0)
            || log[next0][next1]
        ) {
            if (--loopMax <= 0) return result;
            console.log(loopMax)
            nextdir();
            setMove();
        }
        if (max_j * max_i == result.length) return result;

        //console.log([count, dir_diff[dir][2], next, p, a])
        p = [next0, next1];
    }
};
