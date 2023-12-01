/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // check if input array is empty
    if(strs.length === 0){
        return "";
    }
    // iterate through charcters of forst string in array strs[0]
    for(let i=0; i<strs[0].length; i++){
        // iterate through rest of the strings in the array, e.g. strs[1]
        for(let j=1; j<strs.length; j++){
            // check if characters from strs[0] & strs[1] dismatch
            if(strs[j][i] !== strs[0][i]){
                // return till the matched characters were found 
                return strs[0].slice(0, i);
            }
        }
    }
    // if no mismatch found, retrun the whole string as a common prefix
    return strs[0]
};