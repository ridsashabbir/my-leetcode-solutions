/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let array = [];
    for(let i=left; i<=right; i++){
        if(i < 10){
            array.push(i);
            continue;
        }
        let temp = i;
        while(temp > 0){
            let mod = temp % 10;
            if(mod === 0 || i % mod !== 0){
                break;
            }
            temp = Math.floor(temp/10)
        }
        if(temp === 0){
            array.push(i);
        }
    }
    return array;
};