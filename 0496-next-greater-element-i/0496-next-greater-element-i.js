/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const nextGreater = {};
  const stack = [];

  // Iterate through nums2 to find the next greater element for each number
  for (const num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      nextGreater[stack.pop()] = num;
    }
    stack.push(num);
  }

  // Iterate through nums1 to build the result array
  const result = nums1.map((num) => nextGreater[num] || -1);

  return result;
};

// check this tutorial for best explanation :
// https://youtu.be/mJWQjJpEMa4?si=ACo0Io9ugGqhKt7l