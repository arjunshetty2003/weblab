/**
 * Exercise 3: Write a function that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char) {
    // Convert to lowercase to handle both upper and lower case vowels
    char = char.toLowerCase();
    
    // Check if the character is a vowel
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

// Test cases
console.log("isVowel('a'):", isVowel('a')); // Should return true
console.log("isVowel('E'):", isVowel('E')); // Should return true
console.log("isVowel('i'):", isVowel('i')); // Should return true
console.log("isVowel('o'):", isVowel('o')); // Should return true
console.log("isVowel('u'):", isVowel('u')); // Should return true
console.log("isVowel('b'):", isVowel('b')); // Should return false
console.log("isVowel('z'):", isVowel('z')); // Should return false
console.log("isVowel('Y'):", isVowel('Y')); // Should return false
