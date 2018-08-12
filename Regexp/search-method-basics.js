let aString = 'Mozilla';

console.log(aString.search(/[aeiou]/));

/* \w+ - Matches 0 or more word(s)  ( captured by (\w+) ) .

(\w+) - The regular braces in "(\w+)" is called capturing parentheses - this will make the match and remembers the match. 0 or more word(s)

*/