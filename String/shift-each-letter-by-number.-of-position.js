/* how to shift each letter in the given string N places down in the alphabet? Punctuation, spaces, and capitalization should remain intact. For example if the string is "ac" and num is 2 the output should be "ce".  */

CaesarCipher = (str, num) => {

  str = str.toLowerCase();

  let resultStr = '';
  let charAfterNumShift = 0;

  for (let i = 0; i < str.length; i++) {

    charAfterNumShift = (str[i].charCodeAt()) + num

    resultStr += String.fromCharCode(charAfterNumShift);
  }

  return resultStr;
}

console.log(CaesarCipher('ac', 2));  // => ce