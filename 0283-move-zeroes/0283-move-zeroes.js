/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZero = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            nonZero.push(nums[i]);
        }
    }
    while(nonZero.length < nums.length){
        nonZero.push(0);
    }
    //as we cannot make copy of the array so let's shift elements in the main array
    for(let i=0; i<nums.length; i++){
        nums[i] = nonZero[i];
    }
};