/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let array1 = [];
    let array2 = [];
     for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i]) && !array1.includes(nums1[i])) {
            array1.push(nums1[i]);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i]) && !array2.includes(nums2[i])) {
            array2.push(nums2[i]);
        }
    }
    return [array1, array2]
};