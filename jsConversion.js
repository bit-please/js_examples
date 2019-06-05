// function selectEvenItems(strings) {
// 	var result = [];
// 	var index = 0;
// 	strings.forEach(function(string) {
// 		if (index % 2 === 0) {
// 			result.push(string);
// 		}
// 		index++;
// 	});
// 	return result;
// }
// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// function max(numbers) {
// 	var currentMax = numbers[0];
// 	numbers.forEach(function(number) {
// 		if (number > currentMax) {
// 			currentMax = number;
// 		}
// 	});
// 	return currentMax;
// }

// console.log(max([5, 4, 8, 1, 2]));

// function factorial(number) {
// 	var result = 1;
// 	var currentNumber = number;
// 	for (var i = 0; i < number; i++) {
// 		result = result * currentNumber;
// 		currentNumber--;
// 	}
// 	return result;
// }

// console.log(factorial(5));


// function descending(numbers) {
// 	var result = [];
// 	// var index = numbers.length - 1;
// 	for (var i = numbers.length - 1; i >= 0; i--) {
// 		result.push(numbers[i]);
// 	}
// 	return result;
// }

// console.log(descending([1, 3, 5, 7]));

// 1. Write a function that reverses a string. Don’t use the "reverse" method! (Note: you can use the .split("") method to convert a string into an array of characters).

// function reverseString(string) {
// 	var reversedString = "";
// 	var index = string.length - 1;

// 	while	(index >= 0) {
// 		reversedString += string[index];
// 		index--;
// 	}

// 	return reversedString;
// }

// console.log(reverseString("hedgehog"));


// 2. Write a function that accepts a string and returns the number of times that the letter "a" occurs in it.

// function countAs(string) {
// 	var stringArray = string.split("");
// 	var count = 0;

// 	stringArray.forEach(function(letter) {
// 		if (letter === "a") {
// 			count++;
// 		}
// 	});
// 	return count;
// }

// console.log(countAs("bananas"));


// // 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the "index" method!

// function linearSearch(sortedNums, target) {
// 	var foundIndex = null;

// 	sortedNums.forEach(function(num, i) {
// 		if (num === target) {
// 			foundIndex = i;
// 		}
// 	});
// 	return foundIndex;
// }

// console.log(linearSearch([2, 7, 5, 7, 14, 16], 7));

// // 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the "sort" method!

// function addToOrderedArray(orderedArray, number) {
// 	// find correct index to place the number
// 	var placementIndex = 0;
// 	while (orderedArray[placementIndex] < number) {
// 		placementIndex++;
// 	}

// 	// move the other elements out of the way (to the right)
// 	var index = orderedArray.length - 1;
// 	while	(index >= placementIndex) {
// 		orderedArray[index + 1] = orderedArray[index];
// 		index--;
// 	}

// 	// place our number at the correct index
// 	orderedArray[placementIndex] = number;
// 	return orderedArray;
// }

// console.log(addToOrderedArray([2, 5, 7, 14, 16], 9));

function lowerOrHigher(orderedArray, number) {
	var halfwayIndex = Math.floor(orderedArray.length/2);
	var index = 0;
	var message = null;

	while	(index < orderedArray.length) {
		var element = orderedArray[index];

		if (element === number) {
			if (index <= halfwayIndex) {
				message = "lower"
			} else {
				message = "higher"
			}
		}
		index++;
	}
	return message;
}

console.log(lowerOrHigher([2, 7, 15, 18, 34, 45, 57], 57));