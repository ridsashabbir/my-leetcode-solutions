/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let sum = 0, cur = 0, prev = 0;
    for(let i = s.length - 1; i>=0; i--){
        cur = map[s[i]];
        cur < prev ? sum -= cur : sum += cur;
        prev = cur;
    }
    return sum;
};