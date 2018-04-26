'use strict';

function swap (alphabets, index1, index2) {
  var temp = alphabets[index1];
  alphabets[index1] = alphabets[index2];
  alphabets[index2] = temp;
  return alphabets;
}

function permute (alphabets, startIndex, endIndex) {
  if (startIndex === endIndex) {
	console.log(alphabets.join(''));
  } else {
    var i;
    for (i = startIndex; i <= endIndex; i++) {
      swap(alphabets, startIndex, i);
      permute(alphabets, startIndex + 1, endIndex);
      swap(alphabets, i, startIndex); // backtrack
    }
  }
}

var alphabets = ['A','B','C'];
permute(alphabets, 0, alphabets.length-1);