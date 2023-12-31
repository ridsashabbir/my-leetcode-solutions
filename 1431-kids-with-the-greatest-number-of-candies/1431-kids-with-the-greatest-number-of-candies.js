/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    let result = [];
    for(let i=0; i<candies.length; i++){
        candies[i] += extraCandies;
        result.push(candies[i] >= maxCandies);
    }
    return result;
};