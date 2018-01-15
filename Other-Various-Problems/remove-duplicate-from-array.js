// remove duplicate members from an array and return the array

// Solution Steps
/*

A> will start a while loop throght the given array. 
B> Create a new object/ associated array and also a new fresh empty array, to which I wull push unique elements from the given arrray.
B> If i find an element for the first time i will set its value as true (that will tell me element added once.). if i find a element in the exists object, i will not insert it into the return array.*/

function removeDuplicate(arr) {
	var existsObj = {},
		uniqueArr = [];

	for (var i = 0; i < arr.length; i++) {
		if(!existsObj[arr[i]]) {
			uniqueArr.push(arr[i]);
			existsObj[arr[i]] = true;
		}
	}
	return uniqueArr;
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));