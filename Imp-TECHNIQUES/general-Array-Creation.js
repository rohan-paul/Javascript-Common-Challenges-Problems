// new Array(5) is creating a sparse array with 5 empty slots. Then fill(1) method fills the empty slots with 1.

let ones = new Array(5).fill(1);
console.log(ones); // [ 1, 1, 1, 1, 1 ]


/* The static method Array.from() has a wider range of possibilities. The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

A sparse array with length 5 created using new Array(5) is passed as an argument to Array.from(). The second argument is used as a map function that returns 0.
5 iterations (the array length) are made and the arrow function invocation result on each step, is used as the array element value.
*/

let zeros = Array.from(new Array(5), () => 0);

console.log(zeros);  // => [ 0, 0, 0, 0, 0 ]

/* Because the map function is called on every iteration, it is possible to create the array elements dynamically. Let's create an array with items from 1 up to 5: */

let dynamicItems = Array.from(new Array(5), (item, index) => index + 10)

console.log(dynamicItems);  // => [ 10, 11, 12, 13, 14 ]

// The map function is called with 2 arguments: current item and iteration index. The index parameter is used to generate numbers by increment: index + 1.