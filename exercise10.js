/**
 * Exercise 10: Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
 * Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
 */

function charFreq(str) {
    // Create an empty object to store character frequencies
    const freqMap = {};
    
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        // If character already exists in the frequency map, increment its count
        // Otherwise, initialize it with a count of 1
        if (freqMap[char]) {
            freqMap[char]++;
        } else {
            freqMap[char] = 1;
        }
    }
    
    return freqMap;
}

// Test cases
console.log("charFreq('abbabcbdbabdbdbabababcbcbab'):", charFreq('abbabcbdbabdbdbabababcbcbab'));
console.log("charFreq('hello world'):", charFreq('hello world'));
console.log("charFreq('JavaScript'):", charFreq('JavaScript'));
