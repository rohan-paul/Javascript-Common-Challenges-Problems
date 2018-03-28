/*swap number without temp*/

function swapNumber(a, b) {
	console.log('before swap: ', 'a: ', a, 'b: ', b);
	a = a + b;
	b = a - b;
	a = a - b;
	console.log('after swap: ', 'a: ', a, 'b: ', b);
}

swapNumber(2, 3);