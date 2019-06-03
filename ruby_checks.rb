# # Equality check
# x = 10
# if x == "10"
#   puts "equal"
# else
#   puts "not equal"
# end

# # Falsey values
# x = 3
# if nil
#   x = x + 1
# end
# if false
#   x = x + 1
# end
# if 0
#   x = x + 1
# end
# if !!""
#   x = x + 1
# end
# p x

# # Functions
# def print_lyrics
#   puts "Now this is a story all about how"
#   puts "My life got flipped turned upside down"
#   puts "And I'd like to take a minute, just sit right there"
#   puts "I'll tell you how I became the prince of a town called Bel-Air"
# end

# print_lyrics


# # Scope
# x = 100
# def add_one(num)
#   x = 1
#   return num + x
# end
# puts x           #=> 100
# puts add_one(5)  #=> 6
# puts x           #=> 100

# JavaScript objects vs. Ruby classes
class Boat
  attr_reader :name, :color
  attr_writer :color

  def initialize(name, color, price)
    @name = name
    @color = color
    @price = price
  end
end

boat = Boat.new("S. S. Minnow", "white", 20000)
p boat
p boat.name
boat.color = "red"
p boat.color

