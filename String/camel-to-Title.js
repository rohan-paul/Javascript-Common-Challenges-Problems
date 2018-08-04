/* Convert a given sentence from camel case to title case. Create a function which evaluates a given sentence argument in camel case and converts it to title case.
Camel Case is the practice of writing compound words or phrases such that each word or abbreviation in the middle of the phrase begins with a capital letter, with no intervening spaces or punctuation. Like e.g. the word camel case would be written as 'camelCase' in camel case.

For this program -

Input :  "the simplestThings in LIFE are alwaysThe best"

Output: "The Simplest Things In Life Are Always The Best"

*/
/* ALGO -
A. trim and split the string into an array.

B. Add a space before all uppercase letters using regex.

C. Convert all text to lowercase and trim for spaces. And the trimming for spaces again at this step is because,
if there was any uppercase letter in the original string, which is indeed a beginning position of a word and
not a position within a word, then that uppercase letter also will be added an extra space .
So the case in this case is the word 'LIFE'

D. Now I will have an array like below

[ 'the',
  'simplest things',
  'in',
  'life',
  'are',
  'always the',
  'best' ]

Notice 'simplest things', and 'always the'
It came out like this is because they were part of the same word and I added a single space before the uppder case letter.
So, I have to do split(' ') and join(' ') again.



Convert text array into a string and split back into an array.

Filter array for blanks.

Capitalize the first letter of each word.

Join the array into a string.
*/

const camelToTitle = s => {

    // Split the string into an array by single space delimiter
    return s.trim().split(" ")
    .map(replaceCapWithSpaceAndCap)
    .map(item => item.toLowerCase().trim())
    .join(' ')
    .split(' ')
    .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ')
}


// Helper function for adding a space before all uppercase letters using regex
// means replace each Uppercase letter with a single-space and the letter (no case change of that upper-case letter at this point)
// This is also how a replace() function takes a callback

replaceCapWithSpaceAndCap = s => s.replace(/([A-Z])/, (match, replaceWith) => ` ${replaceWith}`)

// Helper function to capitalize the fisrt letter of a word


// Test case of the function
const camelCaseText = "the simplestThings in LIFE are alwaysThe best"

console.log(camelToTitle(camelCaseText))
