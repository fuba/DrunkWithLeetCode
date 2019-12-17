/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
const smallestFromLeaf = function(root) {
    let minStr = null;
    let chars = 'abcdefghijklmnopqrstuvwxyz';

    const bfs = (node, log) => {
        //console.log(node.val, minStr)
        let newStr = [ node.val ].concat(log);
        if (node.left == null && node.right == null) {
            if (compareArray(newStr, minStr) < 1) minStr = newStr;
        }

        if (node.left != null) {
            bfs(node.left, newStr);
        }
        if (node.right != null) {
            bfs(node.right, newStr);
        }
    };

    const compareArray = (strL, strR) => {
        if (strR == null) return -1;
        for (let i = 0; i < strL.length; i++) {
            if (strR[i] == null) return 1;
            if (strL[i] == strR[i]) continue;
            if (strL[i] < strR[i]) return -1;
            return 1;
        }
        return 0;
    };

    bfs(root, []);
    return minStr.map((i) => chars.charAt(i)).join('');
};
