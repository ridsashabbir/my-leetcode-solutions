/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // solution 1: O(n^2)
    // let sum = 0 ;
    // for(let i=0; i<nums.length - 1 ; i++){
    //     for(let j = i+1; j< nums.length ; j++){
    //         sum = nums[i] + nums[j];
    //         if(sum === target){
    //             return [i, j];
    //         }
    //     }
    // }
    // return [];
    
    
    // solution 2: O(n)
    const map = {};
    for(let i=0; i< nums.length; i++){
        const complement = target - nums[i];
        if(complement in map){
            return [map[complement], i];
        }
        // store the current number and its index in hash map
        map[nums[i]] = i;
    }
    return [];
};