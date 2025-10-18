// What is a Function in JavaScript?

/**
 * A function in JavaScript is a block of reusable code designed to perform a particular task.
It helps make code organized, shorter, and easier to manage — instead of writing the same logic again and again, you just call the function.
 */

// Function Syntax. 
function functionName(parameter1, parameter2 ) {
  // code to be executed
  return value; // (optional)
}

/**
 * function → keyword to declare a function

functionName → the name you give to your function

parameters → placeholders for input values

return → sends the result back (optional)
 */

// 1. Function Without Parameters
// This function runs the same code every time you call it.

function greet() {
  console.log("Hello, welcome to JavaScript!");
}

// Calling the function
greet();


//  2. Function With Parameters:- This function can take inputs and use them.

function greetUser(name) {
  console.log("Hello " + name + ", have a great day!");
}

greetUser("Aman");
greetUser("Sara");
greetUser("Ali");


// 3. Function With Return Value :- This type of function returns a result so you can use it later in your code.

function add(a, b) {
  return a + b; // returns the sum
}

let result = add(5, 10);
console.log("The sum is:", result);


// 4. Function Expression:- You can also store a function in a variable.

const multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 5));


// 5. Arrow Function (Modern Way) 
const divide = (a, b) => {
  return a / b;
};

console.log(divide(10, 2));


