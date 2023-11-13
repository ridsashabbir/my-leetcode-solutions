/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
      let carry = 1; // this is the digit which is to be added
    
    for(let i=digits.length-1 ; i>=0 && carry>0; i--){
        const sum = digits[i]+ carry;  // add one 
        digits[i] = sum%10;// update the current digit
        carry = Math.floor(sum/10); // update carry for the next iteration
    }
    if (carry > 0) {
        digits.unshift(carry);
    }
    return digits;
};