// conditional statement:-  What is a Conditional Statement?


// A conditional statement in JavaScript lets your code make decisions — it checks if something is true or false and runs code based on that.

// 1. if statement :- Checks one condition. If true → run the code. If false → skip it.

let temp = 26;

if(temp > 25){
    console.log("Its a hot day")
} 

/**
 * 2. if...else statement

Checks one condition —
If true → run one block
If false → run another.
 */

let age = 17;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote yet.");
}

/*
3. if...else if...else ladder

Used when you have many conditions.
 */

let marks = 65;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

/**
 * 4. switch statement

Used to check multiple fixed values (instead of ranges).
 */

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apples are red or green.");
    break;
  case "banana":
    console.log("Bananas are yellow.");
    break;
  case "grape":
    console.log("Grapes are purple or green.");
    break;
  default:
    console.log("Unknown fruit.");
}

function sum(first , second){
    return first + second;
}

console.log(sum(2,3));




