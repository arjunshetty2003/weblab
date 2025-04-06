/**
 * Exercise 5: Define a function sum() and a function multiply() that sums and
 * multiplies (respectively) all the numbers in an array of numbers.
 * For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
 */

function sum(numbers) {
    let total = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    
    return total;
}

function multiply(numbers) {
    let product = 1;
    
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    
    return product;
}

// Test cases
console.log("sum([1, 2, 3, 4]):", sum([1, 2, 3, 4])); // Should return 10
console.log("sum([5, 10, 15]):", sum([5, 10, 15])); // Should return 30
console.log("sum([]):", sum([])); // Should return 0

console.log("multiply([1, 2, 3, 4]):", multiply([1, 2, 3, 4])); // Should return 24
console.log("multiply([5, 10]):", multiply([5, 10])); // Should return 50
console.log("multiply([]):", multiply([])); // Should return 1 (empty product)
