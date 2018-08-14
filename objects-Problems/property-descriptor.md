## What is attributes (or) descriptors of an object

Each property of an object is more than just a name and value. To understand this, let’s consider a simple book object. The primordial Object constructor has a method which let’s us view all the descriptors of any property of an object. For example, you can view the descriptors of the property 'title' of the 'book' object by calling as below

```JS

let book ={
    title: "JavaScript Allongé",
    author: "Reginald Braithwaite"
};

console.log(Object.getOwnPropertyDescriptor(book, 'title'))
```
The following will be the OUTPUT

```js
{ value: 'JavaScript Allongé',
  writable: true,
  enumerable: true,
  configurable: true }
```
Here, we can see that the property 'title' itself has four more descriptors namely value, writable, enumerable and configurable. And their values are true by default.