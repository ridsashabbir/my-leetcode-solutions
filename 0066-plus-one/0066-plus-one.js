/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for(let i=digits.length-1; i>=0 && carry>0 ; i--){
        let sum = digits[i] + carry;
        digits[i] = sum % 10; // update the current digit after adding 1 carry
        carry = Math.floor(sum / 10); //update carry for next iteration
    }
    if(carry > 0){
        digits.unshift(carry); // if carry remains then add it to the start of the array
    }
    return digits;
};