/**
 * Exercise 8: Write a function findLongestWord() that takes an array of words and
 * returns the length of the longest one.
 */

function findLongestWord(words) {
    if (words.length === 0) {
        return 0;
    }
    
    let maxLength = 0;
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    
    return maxLength;
}

// Test cases
console.log("findLongestWord(['apple', 'banana', 'kiwi']):", findLongestWord(['apple', 'banana', 'kiwi'])); // Should return 6
console.log("findLongestWord(['JavaScript', 'HTML', 'CSS']):", findLongestWord(['JavaScript', 'HTML', 'CSS'])); // Should return 10
console.log("findLongestWord(['a', 'ab', 'abc']):", findLongestWord(['a', 'ab', 'abc'])); // Should return 3
console.log("findLongestWord([]):", findLongestWord([])); // Should return 0
