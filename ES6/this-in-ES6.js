// Lets imagine we have an object with a function called sayLater, like so:

let obj = {
	name: "asim",
	sayLater: function() {
		console.log(`${this.name}`);
	}
};

obj.sayLater();  // => asim

// In the sayLater function this points to obj .So console.log(${this.name}`);` prints out asim.
// Now lets imagine that we log the message using the setTimeout function.

let obj_1 = {
    name: "asim",
    sayLater: function () {
        setTimeout(function () {
            console.log(this)
            console.log(`${this.name}`);
        }, 500);
    }
};

obj_1.sayLater();

/* OUTPUT

Timeout {
  _called: true,
  _idleTimeout: 500,
  _idlePrev: null,
  _idleNext: null,
  _idleStart: 60,
  _onTimeout: [Function],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(asyncId)]: 6,
  [Symbol(triggerAsyncId)]: 1 }
undefined
*/


/* EXPLANATION -
The reason for outputting 'undefined' is that the value of this in a function depends on how the function is called. If its called as obj.sayLater(), the value of this is the calling context which in this case is obj.

However the calling context (what 'this' will point to) for the anonymous function inside setTimeout is either...
   A) In the browser it’s either undefined or the global object depending on if you are running in strict mode or not. or B) In node it’s an internal timeout object.

   C) In all cases however it isn’t going to be obj, so this.name is not going to return 'asim', it’s going to return undefined or raise an error.

This instability of 'this' in ES-5 is an incredibly common problem. But in ES6, if we use fat arrow functions the value of 'this' inside a fat arrow function will be the same as the value of this outside the fat arrow function.

It uses the value of 'this' from the surrounding code for its context. i.e. whatever 'this' points to in the surrounding code, this will point to in the function body of the fat arrow function.

We can re-write our obj to use fat arrow syntax like so: */

let obj_3 = {
    name: 'ES6_Asim',
    sayLater: function () {
        setTimeout(() => {
            console.log(this)
            console.log(`${this.name}`)
        }, 1000)
    }
}

obj_3.sayLater();

/* OUTPUT

{ name: 'ES6_Asim', sayLater: [Function: sayLater] }
ES6_Asim

*/