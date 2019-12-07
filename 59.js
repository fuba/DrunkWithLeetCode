/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let max = n * n;
    let a = [];
    for (let i = 0; i < n; i++) {
        a[i] = [];
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
    while (true) {
        a[p[0]][p[1]] = ++count;
        if (count >= max) {
            return a;
        } 
        setMove();

        if (next0 > n - 1 || next0 < 0 || next1 > n - 1 || next1 < 0) {
            nextdir();
            setMove();
        }

        let next = a[next0][next1];
        if (next != null) {
            nextdir();
            setMove();
        }
        //console.log([count, dir_diff[dir][2], next, p, a])
        p = [next0, next1];
    }
};
