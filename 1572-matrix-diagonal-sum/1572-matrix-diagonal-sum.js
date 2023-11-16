/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let m = mat.length;
    for(let i=0; i<m; i++){
        sum += mat[i][i];
        sum += mat[i][m-i-1];
    }
    if(m%2 !==0){
        sum -= mat[Math.floor(m / 2)][Math.floor(m / 2)];
    }
    return sum;
};