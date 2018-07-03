const arr = [ 10, 20, 30, 40];
for (var i = 0; i < arr.length; i++ ) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element : ' + arr[i]);
  }, 1000)
}

/* output -

Index: 4, element : undefined
Index: 4, element : undefined
Index: 4, element : undefined
Index: 4, element : undefined

*/

/* Explanantion -

The reason for this is because the setTimeout function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index i. After 3 seconds go by, the function is executed and it prints out the value of i, which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4 and the loop finally stops at 4.arr[4] does not exist, which is why you get undefined.

*/

//SOLUTION - 1 - To print all number from 0..4 after 1000 ms

const arr1 = [10, 12, 15, 21];

for (let i = 0; i < arr1.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 1000);
}


// SOLUTION - 3 - To print all number from 0..4 after 1000 ms

const arr2 = [10, 12, 15, 21];

for (var i = 0; i < arr2.length; i++ ) {
  // pass in the variable i so that each function
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is ' + i_local);
    }
  }(i), 1000)
}