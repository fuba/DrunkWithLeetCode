/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let done = [];
    for (let y=0;y<matrix.length;y++) {
        for (let x=0;x<matrix[y].length;x++) {
            let to_y = x;
            let to_x = matrix[y].length - 1 - y;
            
            //console.log([x, y, to_x, to_y])
            
            if (done[to_x] == null) done[to_x] = [];
            if (done[to_y] == null) done[to_y] = [];
            if (done[to_x][to_y]) continue;

            done[to_x][to_y] = true;
            done[x][y] = true;
            
            let val = matrix[x][y];
            matrix[x][y] = matrix[to_x][to_y];
            matrix[to_x][to_y] = val;
        }
    }
};
