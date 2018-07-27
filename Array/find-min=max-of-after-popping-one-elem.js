// https://youtu.be/hbp6IrCysDs?t=3m3s  -  given an arry, write a function to return the maximum and minimum possible sum of all the rest of the elements, after taking out a random element from the array.

// Solution Algo - After sorting the array, when I leave the max element (i.e. the right-most elem) the rest of the array sum will be he minimum sum. And similarly, when I leave the left-most elem, the sum of the rest of elements are the max sum.

minMax_after_popping_one_Elem = arr => {

 // Remember slice() method does not include the second argument in the returned sliced array.

 let minSum = arr.sort().slice(0, arr.length - 1).reduce((a, b) => a + b);

 let maxSum = arr.sort().slice(1, arr.length).reduce((a, b) => a + b);

 return console.log(minSum, maxSum);

}

myArr = [ 2, 1, 3, 4]

minMax_after_popping_one_Elem(myArr);