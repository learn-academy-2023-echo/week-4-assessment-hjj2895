# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# Create a method that accepts a number as parameter
# If number is odd
    # Return a string that states number is odd
# Otherwise
    # Return a string that states number is even
# end

def even_odd num
    if num.odd?
        "#{num} is odd"
    else
        "#{num} is even"
    end
end

# p even_odd(reposts1)
# p even_odd(reposts2)
# p even_odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# Create a method that accepts a string as parameter
# Create a variable called vowels and assign it to a string of vowels in upper and lowercase
# Return a substring with vowels removed by using .delete()
# end

def remove_vowels str
    vowels = "aeiouAEIOU"
    str.delete(vowels)
end

# p remove_vowels(beatles_album1)
# p remove_vowels(beatles_album2)
# p remove_vowels(beatles_album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# Create a method that accepts a string as parameter
# Convert string into lowercase
# If string is equal to string in reverse using .reverse()
    # Return a string that says string is a palindrome
# Otherwise
    # Return a string that says string is not a palindrome

def palindrome str
    if str.downcase == str.downcase.reverse
        "#{str} is a palindrome"
    else
        "#{str} is not a palindrome"
    end
end

# p palindrome(palindrome_test_case1)
# p palindrome(palindrome_test_case2)
# p palindrome(palindrome_test_case3)