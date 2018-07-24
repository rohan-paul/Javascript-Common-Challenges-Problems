/* The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.

I can avoid duplicate selection by picking only remaining elements: pick a random number in the range [0, length - 1], where length starts at array.length and decreases by one with each iteration.

In other words, length represents the number of remaining elements to shuffle. Compact the remaining deck as I move elements so that I can easily pick out the next element for shuffling:
*/


shuffleArr = arr => {

    let currentIndex = arr.length, randomIndex;

    while (currentIndex) {

        // generate an index which is between 0 and (currentIndex - 1)
        randomIndex = Math.floor(Math.random() * currentIndex);

        // For the first iteration itselft, before the shuffling, ie. before swapping, I have to reduce currentIndex by 1 as currentIndex is the length of the array, and the max index of an array is ( array.length - 1)

        currentIndex--;

        [arr[currentIndex], arr[randomIndex] ] = [ arr[randomIndex], arr[currentIndex] ]

    }
    return arr;
}
/* https://stackoverflow.com/questions/21483667

The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive). That is, it returns only one interval, [0,1).

That is, 0 <= Math.random() < 1. The multiplier is what extends this to include the specified number of intervals.

    Here are two example randomly generated numbers:

    Math.random() // 0.011153860716149211
    Math.random() // 0.9729151880834252

    Because of this, when we multiply our randomly generated number by another number, it will range from 0 to a maximum of 1 lower than the number being multiplied by

    Because, The Math.floor() function returns the largest integer less than or equal to a given number.

    Effectively, Math.floor() simply removes the decimal places rather than rounding the number (that is to say, 0.999 becomes 0 when processed with Math.floor(), not 1)).

    Math.floor(0.011153860716149211 * 5) // 0
    Math.floor(0.9729151880834252 * 5)   // 4 */

let myArr = [1, 2, 3, 4, 5]

console.log(shuffleArr(myArr))


