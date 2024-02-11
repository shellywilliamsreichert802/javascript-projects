// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
function divide(numerator, denominator) {
    if (denominator === 0) {
       throw Error('You cannot divide by zero!');
    }
    return numerator/denominator;
 }


// Example usage:
try {
    const result = divide(20, 2);
    console.log("Result:", result); // Should print 10
    const zeroResult = divide(10, 0); // This will throw an error
} catch (error) {
    console.error("Error:", error.message);
}
