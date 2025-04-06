/**
 * Exercise 4: Write a function translate() that will translate a text into "rövarspråket".
 * That is, double every consonant and place an occurrence of "o" in between.
 * For example, translate("this is fun") should return the string "tothohisos isos fofunon".
 */

function translate(text) {
    // Function to check if a character is a consonant
    function isConsonant(char) {
        // Convert to lowercase to handle both upper and lower case
        char = char.toLowerCase();
        
        // Check if the character is a letter but not a vowel
        return /[a-z]/.test(char) && !['a', 'e', 'i', 'o', 'u'].includes(char);
    }
    
    let result = '';
    
    // Process each character in the input text
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (isConsonant(char)) {
            // Double consonants with 'o' in between
            result += char + 'o' + char;
        } else {
            // Keep non-consonants as they are
            result += char;
        }
    }
    
    return result;
}

// Test cases
console.log("translate('this is fun'):", translate('this is fun')); // Should return "tothohisos isos fofunon"
console.log("translate('hello'):", translate('hello')); // Should return "hohelollolo"
console.log("translate('abc'):", translate('abc')); // Should return "abobc"
console.log("translate('xyz'):", translate('xyz')); // Should return "xoxyzoz"
