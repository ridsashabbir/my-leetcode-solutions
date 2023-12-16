/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const occurences = {};
    const frequencies = []
    for(let i=0; i<arr.length; i++){
        const num = arr[i];
        if(occurences[num]){
            occurences[num] += 1
        } else {
            occurences[num] = 1;
        }
    }
    for(const key in occurences){
        if(occurences.hasOwnProperty(key)){
            frequencies.push(occurences[key])
        }
    }
    for(let i=0;i<frequencies.length; i++){
        for(let j=i+1; j<frequencies.length; j++){
            if(frequencies[i] === frequencies[j]){
                return false;
            }
        }
    }
    return true;
};