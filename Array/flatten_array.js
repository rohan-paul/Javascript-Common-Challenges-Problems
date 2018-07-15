/* Deep flattens an multi-diamentional array.

Use recursion. Use Array.concat() with an empty array ([]) and the spread operator (...) to flatten an array. Recursively flatten each element that is an array.*/

const deepFlatten = arr => [].concat(...arr.map(
	toFlatten => Array.isArray(toFlatten) ? deepFlatten(toFlatten) : toFlatten)
	);

// Same implementation using reduce() and without using arrow syntax
function flatten (arr) {
	return arr.reduce(function(flat, toFlatten) {
		return flat.concat(Array.isArray(toFlatten) ? flatten(flat) : toFlatten);
	}, []);
}

/*My Note - Explanation of why an empty array passed as an argument - The code breaks without it, giving arr.reduce is not a function.

The empty array [} is the starting accumulator value for the reduce function, the initial value. In this case it's the value of flat in the first call to the anonymous function passed to reduce. If it is not specified, then the first call to reduce binds the first value out of the array to flat, which would eventually result in 1 being bound to flat in both the examples. 1.concat is not a function */

// console.log(deepFlatten([1, [2], [[3], 4], 5]));
// console.log(flatten([1, [2], [[3], 4], 5]));


// More performant functional solution
var flattened = [].concat.apply([], [[1],[2,3],[4]]);
// console.log(flattened);

// huge (e.g. 200 000 elements) arrays and also works on nested arrays
const flattenLargeArray = function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flattenLargeArray(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};


console.log(flattenLargeArray([1, [1], [[3]]]));
console.log(flattenLargeArray(Array(2).fill(Array(2).fill(Array(2).fill([1])))));
console.log(flattenLargeArray([[1],[2,3],[4]]));
console.log(flattenLargeArray([1, [2], [[3], 4], 5]));

// Other alternative
var arrays = [["a"], ["b", "c"]];
console.log(Array.prototype.concat.apply([], arrays));
