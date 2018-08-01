/* search()

str.search() returns the position of the first match or -1 if none found:
So if Only a vowel is found in position-index-0 of the string, then '0' is returned. If the vowel is found in position-index-2 then '2' is returned.

*/

let str1 = 'My Name is Rohan'

var vowelSearchResult = str1.search(/[aeiuo]/);

// console.log(vowelSearchResult)  // => 4

/* str.match(reg), no “g” flag

The method str.match behavior varies depending on the g flag. First let’s see the case without it.

Then str.match(reg) looks for the first match only.

The output from the above - is an array

    with that match as the first element

    index – the position of the match inside the string as the second element

    input – the subject string as the third element

THE ARRAY MAY HAVE MORE THAN 3 ELEMENTS WHEN THE PARTO OF THE REGEXP HAS A (...) PARENTHESIS - (see below example)

*/

let str2 = "Fame is the thirst of youth";

let result = str2.match(/the/i);

// console.log(result);  // => [ 'the', index: 8, input: 'Fame is the thirst of youth' ]

// console.log(result[0])  // => the

// console.log(result.index) // => 8

// console.log(result.input) // =>  Fame is the thirst of youth

let str3 = "JavaScript is a programming language";

let result3 = str3.match(/JAVA(SCRIPT)/i);

// console.log(result3)

/* OUTPUT

[ 'JavaScript',
  'Script',
  index: 0,
  input: 'JavaScript is a programming language' ]

  */

/*  Due to the i flag the search is case-insensitive, so it finds JavaScript. The part of the match that corresponds to SCRIPT becomes a separate array item.
 */

// console.log(result3[0])  // => JavaScript
// console.log(result3.index)  // => 0

/* str.match(reg) with “g” flag

When there’s a "g" flag, then str.match returns an array of all matches. There are no additional properties in that array, and parentheses do not create any elements. */

let result4 = str3.match(/JAVA(SCRIPT)/ig);

console.log(result4)  // => [ 'JavaScript' ]
/*
If there are no matches, the call to match returns null
Please note, that’s important. If there were no matches, the result is not an empty array, but null.

Keep that in mind to evade pitfalls like trying to find the length of the returned array - If I do that, will get "TypeError: Cannot read property 'length' of null" */

console.log(str3.match(/JAVAMM(SCRIPT)/ig));      // => null

console.log(str3.match(/JAVAMM(SCRIPT)/ig).length);      // => null