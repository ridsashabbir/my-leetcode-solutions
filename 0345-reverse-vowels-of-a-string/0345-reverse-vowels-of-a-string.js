/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let array = s.split(''); // get characters of string
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    for(let i=0, j=s.length-1; i<j;){
        while(i<j && !vowels.includes(array[i])){ i++; }
        while(i<j && !vowels.includes(array[j])){ j--; }
        [array[i], array[j]] = [array[j], array[i]];   //swap elements
        i++;  j--;
    }
    return array.join('');  // join characters to make a string again
};