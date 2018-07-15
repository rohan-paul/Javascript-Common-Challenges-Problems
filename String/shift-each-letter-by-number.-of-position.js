/* how to shift each letter in the given string N places down in the alphabet? Punctuation, spaces, and capitalization should remain intact. For example if the string is "ac" and num is 2 the output should be "ce".  */

CaesarCipher = (str, num) => {

  str = str.toUpperCase();

  let resultStr = '';
  let charAfterNumShift = 0;

  for (let i = 0; i < str.length; i++) {

    charAfterNumShift = (str[i].charCodeAt()) + num

    resultStr += String.fromCharCode(charAfterNumShift);
  }

  return resultStr;
}

/* The fromCharCode function doesn't operate on strings, it operates on the global String object like so String.fromCharCode(65, 66, 67);  // "ABC" */

console.log(CaesarCipher('ab', 2));  // => ce


/* SOLUTION-2 - Note - Unicode for English letters A-Z ranges from 65 (for A) to 90 (for Z) ( https://unicodelookup.com/ )

*/

CaesarCipher2 = (str, num) => {

  str = str.toUpperCase();
  let charAfterNumShift = 0;

  return str.split('').map(elem => {
    charAfterNumShift = elem.charCodeAt() + num;
    return String.fromCharCode(charAfterNumShift);
  }).join('')
}

console.log(CaesarCipher2('ab', 2));  // => ce