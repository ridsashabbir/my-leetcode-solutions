/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    // sort array in descending order
    nums.sort((a,b) => b-a);
    // this loop will ensure that there are 3 elements left (3 sides of triangle)
    for(let i=0; i<nums.length - 2; i++){
        if(nums[i] < (nums[i+1] + nums[i+2])){
            return nums[i] + nums[i+1] + nums[i+2];
        }
    }
    return 0;
};

// According to the triangle inequality, the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.