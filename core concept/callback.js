console.log("Hello CallBack Function")

// what is call back function in java Script 

// A callback in JavaScript is a function passed as an argument to another function — and it gets executed after that function finishes its work.

/**
 * Another Explanation :- A callback is a function passed as an argument to another function.
It allows you to run code after something else has finished.\

In short:- Do this, and then call this function when you’re done.
 */

// Basic call back example 

function greetName(name , callback){
    console.log("Hello " + name)
    callback() // call the callback function. 
}

function sayBye(){
    console.log("GoodBye")
}

greetName("Amaan" , sayBye);


// Here:-  greet() runs first. 
// After greeting, it calls sayBye() (the callback).


// Example 2: Anonymous Callback Function

/**
You don’t always have to name your callback.
You can write it directly inside the function call.
 */

function greetName1(name , callback){
    console.log("Hello " + name)
    callback() 
}

greetName1("John" , function(){
    console.log("Have a good day ahead! ")
});


// Example 3: Callback with setTimeout (Asynchronous Example)

console.log("Start ")

setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

//The function inside setTimeout() is a callback —
// it runs later (after 2 seconds), while other code keeps running.


// Example 4: Callback in Array Methods (Built-in Callbacks) 

/**
 * JavaScript already uses callbacks in many array methods:
forEach()
map()
filter()
reduce()
find()
 */

// forEach() 

let numbers = [1,2,3,4,5];
numbers.forEach(function(num){
    console.log(num * 2);
});

// map();

let numbers1 = [1,2,3,4,5];
let square = numbers1.map(function(num) {
    return num * num;

});

console.log(square);

// filter();

let number2 = [10,20,30,45,55];
let filtered = number2.filter(function(num){
    return num > 20;

})

console.log(filtered); 

// reduce();

let number3 = [1,2,3,4,5];
let sum = number3.reduce(function(total, num){
    return total + num;
}, 0);
console.log(sum);

// Example 5: Callback in an API (Simulated)

function getData(callback){
    console.log("Fetchi(ng Data... ");

    setTimeout(() => {
        console.log("Data Recived");
        callback();
    },2000);
}

function showData(){
    console.log("Data Displaying on screen")
}

getData(showData);




