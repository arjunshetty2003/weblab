/**
 * Exercise 6: Define a function reverse() that computes the reversal of a string.
 * For example, reverse("jag testar") should return the string "ratset gaj".
 */

function reverse(str) {
    let reversed = '';
    
    // Iterate through the string from the end to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
}

// Test cases
console.log("reverse('jag testar'):", reverse('jag testar')); // Should return "ratset gaj"
console.log("reverse('hello'):", reverse('hello')); // Should return "olleh"
console.log("reverse('a'):", reverse('a')); // Should return "a"
console.log("reverse(''):", reverse('')); // Should return ""
