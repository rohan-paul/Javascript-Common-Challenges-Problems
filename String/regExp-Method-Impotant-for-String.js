/* search()

str.search() returns the position of the first match or -1 if none found:
So if Only a vowel is found in position-index-0 of the string, then '0' is returned. If the vowel is found in position-index-2 then '2' is returned.

*/

let str1 = 'My Name is Rohan'

var vowelSearchResult = str1.search(/[aeiuo]/);

console.log(vowelSearchResult)  // => 4

/* str.match(reg), no “g” flag

The method str.match behavior varies depending on the g flag. First let’s see the case without it.

Then str.match(reg) looks for the first match only.

The output from the above - is an array

    with that match as the first element

    index – the position of the match inside the string as the second element

    input – the subject string as the third element

*/

let str = "Fame is the thirst of youth";

let result = str.match(/the/i);

console.log(result);

// Output // => [ 'the', index: 8, input: 'Fame is the thirst of youth' ]