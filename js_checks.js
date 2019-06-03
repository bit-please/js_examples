// // Equality check
// var x = 10;
// if (x === "10") {
// 	console.log("equal");
// } else {
// 	console.log("not equal");
// }

// Falsey values
// var x = 3;
// if (null) {
// 	x++;
// }
// if (false) {
// 	x++;
// }
// if (0) {
// 	x++;
// }
// if ("") {
// 	x++
// }
// console.log(x);

// // Functions
// var printLyrics = function(){
// 	console.log("Now this is a story all about how");
// 	console.log("My life got flipped turned upside down");
// 	console.log("And I'd like to take a minute, just sit right there");
// 	console.log("I'll tell you how I became the prince of a town called Bel-Air");
// }

// printLyrics();

// // Scope
// // global scope
// var x = 100;
// function addOne(num) {
// 	// local scope
// 	x = 1;
// 	return num + x;
// }
// console.log(x);
// console.log(addOne(5));
// console.log(x);

// JavaScript objects vs. Ruby classes
var boat = {
	name: "S. S. Minnow",
	color: "white",
	price: 20000
}

console.log(boat);
console.log(boat.name);
boat.color = "red";
console.log(boat.color);