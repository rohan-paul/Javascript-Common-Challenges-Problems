// basic way to print a given array's prototypes

let myArr = [1, 2, 3];

// console.log(Object.getPrototypeOf(myArr)) // => []

// console.log(Object.getOwnPropertyNames(myArr))  // => [ '0', '1', '2', 'length' ]

// Not a prototype method, but you can use Object.getPrototypeOf to traverse the prototype chain and then get the own property names of each of those objects.

console.log(Object.getPrototypeOf(Array.prototype))