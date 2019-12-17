/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let iZero = {};
    let jZero = {};
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                iZero[i] = 1;
                jZero[j] = 1;
            }
        }
    }
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            if (iZero[i] == 1 || jZero[j] == 1) {
                matrix[i][j] = 0;
            }
        }
    }
};
