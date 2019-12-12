/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let isleId = 0;
    let equal = {};
    
    let checkIsle = (i, j) => {
        if (grid[i][j] == 0) {
            grid[i][j] = 0; // set int
            return;
        }

        let nameN = 0;
        let nameW = 0;
        if (j > 0) {
            nameN = grid[i][j-1];
        }
        if (i > 0) {
            nameW = grid[i-1][j];
        }

        if (nameN == 0 && nameW == 0) { // new isle
            grid[i][j] = ++isleId;
        }
        else if (nameN == nameW) { // same isle
            grid[i][j] = nameN;
        }
        else if (nameN != 0 && nameW != 0) { // find bridge
            let min = Math.min(nameN, nameW);
            let max = Math.max(nameN, nameW);
            if (!equal[max]) {
                equal[max] = {};
            }
            equal[max][min] = true;
            grid[i][j] = min;
        }
        else { // 0 && 0>x
            grid[i][j] = nameN + nameW;
        }
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            checkIsle(i, j);
        }
    }
    
    let dupCounter = {};
    for (let i in equal) {
        dupCounter[i] = true;
        if (Object.keys(equal[i]).length >= 2) {
            let keys = Object.
                keys(equal[i]).
                map((n) => {return parseInt(n)}).
                sort();
            for (j = 1; j < keys.length; j++) {
                if (!equal[keys[j]]) {
                    dupCounter[keys[j]] = true;
                }
            }
        }
    }

    return isleId - Object.keys(dupCounter).length;
};
