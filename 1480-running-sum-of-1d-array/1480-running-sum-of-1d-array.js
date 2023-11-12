/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    const result = [];
    for(const num of nums){
        sum = sum + num;
        result.push(sum);
    }
    return result;
};