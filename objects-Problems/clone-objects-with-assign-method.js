/* There are multiple ways to clone objects -
For general reference - https://medium.freecodecamp.org/lets-explore-objects-in-javascript-4a4ad76af798
Clone - Object.assign() can be used to clone objects.
*/

// ALT-1
let book ={
    title: "JavaScript Allongé",
    author: "Reginald Braithwaite"
};

let clone_1 = Object.assign({}, book);

console.log(book) // => { title: 'JavaScript Allongé', author: 'Reginald Braithwaite' }
console.log(clone_1)  // => { title: 'JavaScript Allongé', author: 'Reginald Braithwaite' }

//ALT-2
// Iterate through source object’s properties and copy them one by one on the target object. As it may seem good at the beginning, it is not a performance friendly solution and a potential bottleneck when it comes to large and deep objects.
cloneObjIteratively = obj => {

    let clonedObj = {};

    for (let i in obj) {
        clonedObj[i] = obj[i];
    }
    return clonedObj;
}

const myObj_1 = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4,
    },
  }
console.log(cloneObjIteratively(book));
console.log(cloneObjIteratively(myObj_1));

/* Issues with ALT-2
objCopy object has a new Object.prototype method different from the mainObj object prototype method, which is not what we want. We want an exact copy of the original object.

Property descriptors are not copied. A "writable" descriptor with value set to be false will be true in the objCopy object (because by default the 'writable' descriptor takes true ).

The code above only copies enumerable properties of mainObj.

If one of the properties in the original object is an object itself, then it will be shared between the copy and the original making their respective properties point to the same object. */