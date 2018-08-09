/* https://youtu.be/hbp6IrCysDs?t=11m17s - The Indian guy doing mock interview.

PROB - Given an integer, find the length of the integer without converting it to string.

So, I can not purely split it and apply length, because counting the number of digits in integers - 12345 = 5, and also 12345.678 = 5 as well).

The correct count of the total number of digits in the value (so 12345.678 = 8),

*/

let number = 12345.678

// Lets first do a very brute-force method, without using toString() but still converting the number to string

countDigits = n => {

    // convert to number and split by decimal; If the number has decimal, it will give me an array of 2 elements else an array of one element, and each element being a string value on which I can apply the length property to find its length
    let strNum = (n + '').split('.');

    if (strNum[1]) {
        return (strNum[0].length + strNum[1].length )
    } else {
        return (strNum[0])
    }
}

console.log(countDigits(number))  // => 8



