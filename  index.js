// Helper function to calculate the square of a number
function square(number) {
    return number * number;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to calculate the factorial of a number
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  // Main function to demonstrate the helper functions
  function main() {
    // Calculate and print the square of 5
    console.log("Square of 5:", square(5));
  
    // Check if 10 is even and print the result
    console.log("Is 10 even?", isEven(10));
  
    // Calculate and print the factorial of 5
    console.log("Factorial of 5:", factorial(5));
  }
  
  // Call the main function to run the code
  main();
