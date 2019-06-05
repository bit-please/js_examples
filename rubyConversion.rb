# # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

# def select_even_items(strings)
#   result = []
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       result << string
#     end
#     index = index + 1
#   end
#   result
# end
# p select_even_items(["a", "b", "c", "d", "e", "f"])

# # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

# def max(numbers)
#   current_max = numbers[0]
#   numbers.each do |number|
#     if number > current_max
#       current_max = number
#     end
#   end
#   current_max
# end
# p max([5, 4, 8, 1, 2])

# # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

# def factorial(number)
#   result = 1
#   current_number = number
#   number.times do
#     result = result * current_number
#     current_number = current_number - 1
#   end
#   result
# end
# p factorial(5)

# # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

# def descending(numbers)
#   result = []
#   index = numbers.length - 1
#   numbers.length.times do
#     result << numbers[index]
#     index = index - 1
#   end
#   result
# end
# p descending([1, 3, 5, 7])


# 1. Write a function that reverses a string. Don’t use the "reverse" method! (Note: you can use the .split("") method to convert a string into an array of characters).

# def reverse_string(string)
# 	reversed_string = ""
# 	index = string.length - 1

# 	while index >=0 
# 		reversed_string += string[index]
# 		index -= 1
# 	end

# 	reversed_string
# end

# p reverse_string("purple hippo")



# # 2. Write a function that accepts a string and returns the number of times that the letter "a" occurs in it.


# def count_as(string)
# 	string_array = string.split("")
# 	count = 0

# 	string_array.each do |letter|
# 		if letter == "a"
# 			count += 1
# 		end
# 	end

# 	count
# end

# p count_as("bananas")



# # 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the "index" method!

# def linear_search(sorted_nums, target)
# 	found_index = nil

# 	sorted_nums.each_with_index do |num, i|
# 		if num == target
# 			found_index = i
# 		end
# 	end

# 	found_index
# end

# p linear_search([2, 5, 7, 14, 16], 9) #2


# # 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the "sort" method!


# def add_to_ordered_array(ordered_array, number)
# 	# find correct index to place the number
# 	placement_index = 0
# 	while ordered_array[placement_index] < number
# 		placement_index += 1
# 	end

# 	# move the other elements out of the way (to the right)
# 	index = ordered_array.length - 1
# 	while index >= placement_index
# 		ordered_array[index + 1] = ordered_array[index]
# 		index -= 1
# 	end

# 	# place our number at the correct index
# 	ordered_array[placement_index] = number

# 	ordered_array
# end

# p add_to_ordered_array([2, 5, 7, 14, 16], 3) # => [2, 5, 7, 9, 14, 16]



# 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string "lower" if the value is found in the lower half of the array, and it should return "higher" if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!


def higher_or_lower(ordered_array, number)
	# split array in half
	halfway_index = (ordered_array.length/2).floor
	index = 0
	message = nil

	while index < ordered_array.length
		element = ordered_array[index]

		if element == number
			if index <= halfway_index
				message = "lower"
			else
				message = "higher"
			end
		end

		index += 1

	end

	return message
end

p higher_or_lower([2, 7, 15, 18, 34, 45, 57], 57)

