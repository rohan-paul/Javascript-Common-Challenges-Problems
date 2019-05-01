const isEqual = require("lodash.isequal");
const differenceWith = require("lodash.differencewith");
const _ = require("lodash");

var arr2 = [1, 2, 3, 4, 5];
var arr3 = [5, 4, 3, 10, 9];

console.log(differenceWith(arr2, arr3, isEqual).length);
// console.log(_.differenceWith(arr2, arr3, isEqual).length);

// console.log(isEqual(arr2.sort(), arr3.sort()));
/*
var myObject = {
	ircEvent: "PRIVMSG",
	method: "newURI",
	regex: "^http://.*"
};
delete myObject.regex;

console.log(myObject);

var moment = require("moment");

var day = moment.unix(1556462955).format("dddd MMMM Do YYYY");
console.log(day);

// and then:

// console.log(day.format("dddd MMMM Do YYYY, h:mm:ss a"))

var omit = require("lodash.omit");

var obj = { x: 1, y: 2, z: 3 };
var result = omit(obj, ["x", "y"]);
console.log(result);
*/
