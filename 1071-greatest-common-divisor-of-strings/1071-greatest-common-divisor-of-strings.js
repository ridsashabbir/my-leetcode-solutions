/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    let gcdlength = gcd(len1, len2);
    let substring = str1.substring(0, gcdlength);
    if(str1+str2 === str2+str1 && str1.startsWith(substring) && str2.startsWith(substring)){
        return substring;
    } else{
        return "";
    }
};

function gcd(a,b){
    return b===0 ? a : gcd(b, a%b);
}