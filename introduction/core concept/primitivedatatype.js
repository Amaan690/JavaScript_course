/** 
 * primitive data types (What are data types )
 *These are the most basic, fundamental data types. They are immutable, which means their value cannot be changed once created (though the variable holding them can be reassigned to a new value). 

 * data types in js  :- 1. Primitive 2. Non primitive 
 * 
 * 1primitive data types:- primitive data types in javaScript are the most basic data types that are not objects and have no methods. They are immutable, meaning their values cannot be changed. for example:-  string , number, boolean ,  Null , Undefined 
 * 
 * 2. Non-Primitive data type :- Object , Array , Function  
 */

// types of number :- integer, Negative number , whole number , zero , Natural number  
// floating points  eg:- 24.34 =  24 is whole number , . is  desimal point and 34 is fractional part 

// number example :-  The Number type represents all numbers, including integers (whole numbers) and floating-point numbers (decimals).

let number = 4 ;
console.log(number);


let num =  24.34;
console.log(num); // this is a floating points number  

// 2. Strings:- A String is used to store text. It must be enclosed in single quotes ('...'), double quotes ("..."), or backticks (`...`). 
 
let myName = "Md Amaan";
console.log(myName);

let str =  'welcome to my javaScript course';
let str2 = `${str}.Subscribe for more coureses.`; // string concatinate
console.log(str);
console.log(str2);

// 1. boolean:- Boolean are a basic data types in javaScript. 
// 2. Two Valuse: can only be true or flase.
// 3. 'True' is a string  not a boolean. 

let number1 = 5;
if(number1 === 4){
    console.log(true);
}else{
    console.log(false);
}

// undefined eg:- A variable that has been declared (created) but has not yet been assigned a value has the type

let userName;


console.log(`Your name is not assigned yet. ${userName}`)
userName = "Md Amaan";
console.log(`Your name is ${userName}`)

let name;
console.log('------------------------------------------------------------------' + name)

// Null :- This type has only one value: null. It represents the intentional absence of any object value. It's different from undefined because a developer explicitly sets a variable to null to show it's empty.

let selectedCar = null; // The user hasn't selected a car yet
console.log(selectedCar);

// Symbol (Added in ES6) :- A Symbol is a unique and immutable value. It's an advanced type, often used to create unique keys for objects to prevent naming conflicts.

let id = Symbol("a unique id");
let user = {
  [id]: 12345
};
console.log(user[id]);


// BigInt (Added in ES2020)

// This is a special numeric type used for whole numbers that are too large to be represented by the standard Number type. You create one by adding an n to the end of the number.

let veryLargeNumber = 9007199254740991n;
let anotherBigInt = BigInt(9007199254740992);
console.log(veryLargeNumber);
console.log(anotherBigInt);

// The Object (Non-Primitive) Data Type :- The Object type is used to store collections of data and more complex entities. Unlike primitive types, objects are mutable (their contents can be changed).

// object :- The most common non-primitive type. A plain object is a collection of key-value pairs, enclosed in curly braces {}.

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: true
};
console.log(person);

// Array :- An Array is a special type of object used to store an ordered list of values. Arrays are enclosed in square brackets [].

let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 100];
let mixed = ["text", 5, true, null];
console.log(fruits);
console.log(numbers);
console.log(mixed);

console.log('---------------------------------------------------')
// Function :- In JavaScript, a Function is also a special type of object. It's a block of code designed to perform a particular task and can be executed (called) by your code.

function greet(name) {
  console.log(`Hello, ${name}`);
}
(greet("Amaan"));


// You can also store a function in a variable
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));


// types of operators:- typeof operator to find out the data type of a variable.

console.log(typeof "Hello");      // "string"
console.log(typeof 100);          // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof { a: 1 });     // "object"
console.log(typeof [1, 2, 3]);    // "object" (Arrays are a special type of object)
console.log(typeof function() {}); // "function"
console.log(typeof 123n);         // "bigint"
console.log(typeof Symbol("id")); // "symbol"

// This is a famous quirk in JavaScript!
console.log(typeof null);         // "object"





