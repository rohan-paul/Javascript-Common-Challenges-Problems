/* Find the intersection of two arrays. Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?
intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
intersection([1, 5, 4, 2], [7, 12])             // []
*/

// My first attempt at it
arrayIntersection1 = (arr1, arr2) => {
  return arr1.filter(item => {
      return arr2.indexOf(item) !== -1;
  })
}

// console.log(arrayIntersection1 ( [1, 5, 4, 2], [8, 91, 4, 1, 3] ));
// console.log(arrayIntersection1 ( [1, 5, 4, 2], [7, 12] ));
// console.log(arrayIntersection1 ( [1, 5, 4, 2], [7, 12, 2] ));

// Second Alt
arrayIntersection2 = (arr1, arr2) => {

  let intersection = [];
  for (let i of arr1) {
    for (let j of arr2) {
      if (i === j) {
        intersection.push(i);
        break;
      }
    }
  }
  return intersection;
}

console.log(arrayIntersection2 ( [1, 5, 4, 2], [8, 91, 4, 1, 3] ));
console.log(arrayIntersection2 ( [1, 5, 4, 2], [7, 12] ));
console.log(arrayIntersection2 ( [1, 5, 4, 2], [7, 12, 2] ));