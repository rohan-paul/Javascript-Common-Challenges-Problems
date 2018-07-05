/* filter - Implement the filter function.

filter([1, 2, 3, 4], n => n < 3)    // [1, 2]

Basically I have to make this function to take a callback and return the output that satisfies the callback
*/

filter = (arr, func)  => {

  let filteredList = [];

  for (let i of arr) {
    if (func(i)) {
      filteredList.push(i)
    }
  }
  return filteredList;
}

console.log(filter([1, 2, 3, 4], n => n < 3));