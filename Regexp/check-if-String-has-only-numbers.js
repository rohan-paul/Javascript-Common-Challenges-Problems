// I wanna make sure the input contains ONLY digits and no other letters. Write a function to return true if all the chars of the given string are only digits not even + or -

ifStringIsOnlyNumeric = str => str.match(/^[0-9]+$/) !== null

console.log(ifStringIsOnlyNumeric("88kl85"));   // => false
console.log(ifStringIsOnlyNumeric("8885"));     // => false

/* match() method - match() method retrieves the matches when matching a string against a regular expression.

Its Return value >> If the string matches the expression, it will return an Array containing the **entire matched string** as the first element, followed by any results captured in parentheses. If there were no matches, null is returned. So, from the passed-in string (passed as an argument to match() method) either the whole matched string is returned or null is returned.

See below implementation of match()

^	Matches the position at the beginning of the input string. If the RegExp object's Multiline property is set, ^ also matches the position following '\n' or '\r'.

$	>> Matches the position at the end of the input string. If the RegExp object's Multiline property is set, $ also matches the position preceding '\n' or '\r'.

+ >> 	Matches the preceding character or subexpression one or more times. For example, 'zo+' matches "zo" and "zoo", but not "z". + is equivalent to {1,}.

So, by wrapping the regexp with a '^' and '$' I am making sure, that inside the entire string (from start to end) only numeric digits and nothing else.

*/

let str1 = "88kl85"
let str2 = "8885"

let re = /^[0-9]+$/;

console.log(str1.match(/^[0-9]+$/));  // => null
console.log(str2.match(re));  // => [ '8885', index: 0, input: '8885' ]