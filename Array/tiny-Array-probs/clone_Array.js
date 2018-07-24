// Method-1
let originalArray = [ 1, 2, 3]
let [...arrayClone] = originalArray;
console.log(arrayClone)  // => [ 1, 2, 3 ]

// Method-2
let originalArray1 = [ 1, 2, 3]
let arr2 = originalArray1.concat()
console.log(arr2)
