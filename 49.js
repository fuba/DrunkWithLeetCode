/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = (strs) => {
    let hash = {};
    strs.forEach((str) => {
        let key = getKey(str);
        if (hash[key] == null) hash[key] = [];
        hash[key].push(str);
    })
    return Object.values(hash);
};

let getKey = (str) => {
    let bitArray = new Array(26);
    str.split('').forEach((char) => {
        let code = char.charCodeAt(0) - 97;
        if (bitArray[code] == null) bitArray[code] = 1;
        else bitArray[code]++;
    });
    return bitArray.map((v) => {return (v == null) ? 0 : v}).join();
};
