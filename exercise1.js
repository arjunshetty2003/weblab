/**
 * Exercise 1: Define a function max() that takes two numbers as arguments and
 * returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Test cases
console.log("max(10, 20):", max(10, 20)); // Should return 20
console.log("max(20, 10):", max(20, 10)); // Should return 20
console.log("max(5, 5):", max(5, 5));     // Should return 5
