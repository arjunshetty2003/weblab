/**
 * Exercise 2: Define a function maxOfThree() that takes three numbers as arguments and
 * returns the largest of them.
 */

function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Test cases
console.log("maxOfThree(10, 20, 30):", maxOfThree(10, 20, 30)); // Should return 30
console.log("maxOfThree(30, 20, 10):", maxOfThree(30, 20, 10)); // Should return 30
console.log("maxOfThree(10, 30, 20):", maxOfThree(10, 30, 20)); // Should return 30
console.log("maxOfThree(5, 5, 5):", maxOfThree(5, 5, 5));       // Should return 5
console.log("maxOfThree(5, 5, 10):", maxOfThree(5, 5, 10));     // Should return 10
