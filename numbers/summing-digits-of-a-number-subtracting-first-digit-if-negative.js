/* Problem: Given a number, write a function sumDigits that returns the sum of all its digits. If the number is negative, the first digit should count as negative. For example sumDigits(-316)) should return 4 */

// Little ugly way
sumDigits = num => {

    //create array of number char
    let numArr = num.toString().split('')

    // If first char is negative symbol let the first numeric element be negative
    if (numArr[0] === '-') {
        numArr[1] = '-' + numArr[1]
        numArr.shift();
    }

    // Now convert the array of string chars to array of numbers.
    return numArr.map(str => Number(str)).reduce((accum, curr) => accum + curr)

  }

  console.log(sumDigits(-316));  // => 4