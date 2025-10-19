// 1. Arithmetic Operators (The Math 🧮)

console.log(4+3) // plus operator 
console.log(4-3) // minus operator
console.log(4*3) // multiply operator
console.log(4/3) // division operator
console.log(4%3) // % (Modulus): This one is special! It gives you the remainder of a division. 10 % 3 results in 1 (because 3 goes into 10 three times, with 1 left over).

// 2. Assignment Operators)

// = (Assignment) Assigns the value on the right to the variable on the left.

// code 

let x = 10; // x is assigned the value 10
let y = 5; // y is assigned the value 5
console.log(x);
console.log(y);


// += (Add and Assign) A shortcut to add a value to a variable. 
let score = 10;
score += 5; // This is the same as: score = score + 5.
console.log(score); // score is now 15.

// -= (Subtract and Assign) A shortcut to subtract a value from a variable.
let score1 = 10;
score1 -= 5; // Same as: score = score - 5.
  console.log(score1); // score is now 5.


//   *= (Multiply and Assign)
let num = 10;
num *= 2; // Same as: num = num * 2
 console.log(num);  // num is now 20


// /= (Divide and Assign)
let num1 = 10;
num1 /= 2; // Same as: num = num / 2
console.log(num1); // num is now 5

// 3. Comparison Operators 

// Used to compare two values. The result is always a boolean (true or false). These are essential for if statements.

// === (Strict Equality) Checks if values are equal AND of the same data type. This is the recommended one to use.
 
let num2 = 5;
let num3 = "5";
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(num2 === 5);   // true
console.log(num3 === "5"); // false (Number is not equal to String)

//  == (Loose Equality) Checks if values are equal, but tries to convert their types first. This can be unpredictable.

console.log(5 == 5);   // true
console.log(5 == "5"); // true (JavaScript converts "5" to 5 before comparing)

// !== (Strict Not Equal) Checks if values are not equal OR not the same type.

console.log(5 !== "5"); // true (because types are different)
console.log(5 !== 10);  // true (because values are different)

// != (Loose Not Equal) Checks if values are not equal (after type conversion).

console.log(5 != "5"); // false (because after conversion, they are equal)
console.log(5 != 10);  // true (because values are different) 


// > (Greater Than)
console.log(10 > 5); // true

// < (Less Than)
console.log(5 < 10); // true 

// >= (Greater Than or Equal To)
console.log(5 >= 5); // true

// <= (Less Than or Equal To)
console.log(5 <= 10); // true

 // 4. Logical Operators:- Used to combine two or more true/false values.

 // && (Logical AND) Returns true only if both sides are true. 

 let age = 20;
let hasTicket = true;

// Both conditions must be true
if (age > 18 && hasTicket === true) {
  console.log("Allowed to enter"); // This will run
} else {
  console.log("Not allowed to enter");
}

// || (Logical OR) Returns true if at least one side is true. 

let hasCoffee = false;
let hasTea = true;

// Only one condition needs to be true
if (hasCoffee === true || hasTea === true) {
  console.log("Ready for the morning!"); // This will run
} else{
    console.log("It is not ready for the morning")
}


// ! (Logical NOT) Flips the boolean value: true becomes false, and false becomes true.

let isTired = false;

if (!isTired) { // !isTired means "not false", which is true 
  console.log("Let's keep working!"); // This will run
} else{
    console.log("take a break")
}


// ? : (Ternary Operator) A shortcut for an if...else statement. condition ? (run if true) : (run if false)

let age1 = 17;

let canVote = (age1 >= 18) ? "You can vote your are 18+." : "No You can't vote, you are minor";

console.log(canVote); // "Yes"







 
