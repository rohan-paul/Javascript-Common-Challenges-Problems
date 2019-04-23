/*https://www.interviewbit.com/problems/max-non-negative-subarray/

Find out the maximum sub-array of non negative numbers from an array.
The sub-array should be continuous. That is, a sub-array created by choosing the second and fourth element and skipping the third element is invalid.

Maximum sub-array is defined in terms of the sum of the elements in the sub-array. Sub-array A is greater than sub-array B if sum(A) > sum(B).

Example:

A : [1, 2, 5, -7, 2, 3]
The two sub-arrays are [1, 2, 5] [2, 3].

The answer is [1, 2, 5] as its sum is larger than [2, 3]

NOTE: If there is a tie, then compare with segment's length and return segment which has maximum length
NOTE 2: If there is still a tie, then return the segment with minimum starting index*/

maxNonNegativeContiguousSubArray = A => {

	let resultContiguousSubArr = [];

	let result = [] 
	// this will be an array of array, each of the nested arrays consist of the contiguous non-negative numbers from the given array in the argument to this function.
	
	let sum = -1;

	for (let i = 0; i < A.length; i++) {

		resultContiguousSubArr[i] = [];  // This is the inner nested array of this 2-D array named resultContiguousSubArr

		let temp = 0;  // reset value of temp back to zero at the starting of each loop, otherewise 

		for (var j = i; j < A.length; j++) {

			// If only this current element is non-negative, add this to the the array resultContiguousSubArr[i]
			if (A[j] >= 0) {
				resultContiguousSubArr[i][j - i] =  A[j]
				temp += A[j]
			}
			// if this current element is negaive then break and start from 0-th index of postion of the nested array again. 
			// i.e. butild the next array, starting from next non-nagative number as the first element of the next nested array
			else {
				break;	
			}			
		}

		if (temp > sum) {
			sum = temp;
			result = resultContiguousSubArr[i]
		}
	}
	return result.join(' ');
}

let myArr1 = [1, 2, 5, -7, 2, 3];

console.log(maxNonNegativeContiguousSubArray(myArr1));  // => 1 2 5


/*EXPLANATION ON >>  resultContiguousSubArr[i][j - i] =  A[j]  >> For a fixed i, say for example 0, j will be 0, 1, 2...
Hence [ j - i ] will be 0, 1, 2 ... for fixed value of i 

Then purpose here is, I am assigning the value for the nested array for index 0, 1, 2 ....

*/

// For returnning the sub-array instead of the sum, and accetping only non-negative elements in the final contiguous sub-array, see my solutioin below
// /home/paul/codes-Lap/js/challenges/LeetCode/solutions/max-contiguous-subarray-general-Solution.js