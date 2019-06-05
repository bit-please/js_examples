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


function descending(numbers) {
	var result = [];
	// var index = numbers.length - 1;
	for (var i = numbers.length - 1; i >= 0; i--) {
		result.push(numbers[i]);
	}
	return result;
}

console.log(descending([1, 3, 5, 7]));