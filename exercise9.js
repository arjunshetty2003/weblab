/**
 * Exercise 9: Write a function filterLongWords() that takes an array of words and
 * an integer i and returns the array of words that are longer than i.
 */

function filterLongWords(words, minLength) {
    // Filter the array to only include words longer than minLength
    return words.filter(word => word.length > minLength);
}

// Test cases
console.log("filterLongWords(['apple', 'banana', 'kiwi'], 4):", 
    filterLongWords(['apple', 'banana', 'kiwi'], 4)); // Should return ['apple', 'banana']

console.log("filterLongWords(['JavaScript', 'HTML', 'CSS'], 3):", 
    filterLongWords(['JavaScript', 'HTML', 'CSS'], 3)); // Should return ['JavaScript', 'HTML']

console.log("filterLongWords(['a', 'ab', 'abc'], 2):", 
    filterLongWords(['a', 'ab', 'abc'], 2)); // Should return ['abc']

console.log("filterLongWords([], 5):", 
    filterLongWords([], 5)); // Should return []
