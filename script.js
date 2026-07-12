// var declaration 

// var name = "Amaan";
// var name = "rahul"
// name = "Ali"
// console.log(name )

// let variable declaration
// let name = "rehan"
//  name = "Amaan"
//  console.log(name)

//  const name = "Amaan";
//  name = "rahul" // through an error Assignment to variable 

// console.log(name)

// let age = 23;
// console.log(age)
// console.log(typeof age)

// let name = "Amaan"
// console.log(name)
// console.log(typeof name)

// let number = 2.43;
// console.log(number)
// console.log(typeof number)

//  isFollow = true;
// console.log(isFollow)
// console.log(typeof isFollow)

// Objecct in js 

// const student = {
//     name: "Md Amaan",
//     age: 23,
//     cgpa: 8.3,
//     isPass: true,
//     home: "narkatia ganj",
// };

// console.log(student)
// console.log(typeof student)
// console.log(student["age"])
// console.log(student["name"])
// console.log(student["isPass"]) // using square baracket to print key value 
// console.log(student.cgpa) // this is alsp right way to print key vale 

//  conditional statement 
//  if statement 

/* let age = 17;

if(age >= 18){
    console.log("You can drive")
}

if(age < 18){
    console.log("No You can  not drive drive")
}

let mode = "dark";

if(mode === "dark"){
    color = "Black"
}

if(mode === "light"){
    color = "White"
}
 
console.log(color) */

//   if-else-statement 

/* let age = 25;

if(age >= 18){
    console.log("Yes you can vote")
} else {
    console.log("You can not vote ")
}
    */

// else - if statement 

// let mode = "pink";
// let color;

// if(mode === "dark"){
//     color = "black"
// } else if (mode === "blue"){
//     color = "blue"
// } else if (mode === "pink"){
//     color = "Pink"
// } else {
//     color =  "white"
// }

// console.log(color)

 // ternary operator 

//  let age = 16;

//   let result = age >= 18 ? "adult" : "not adult";
//  console.log(result) 

 /*
 Question:- write a code which can give grades to  student according to their score 
 90 - 100 A
 70 - 89 B
 60 - 69 C 
 50 - 59 D 
 0 - 49 fail
 */

//  let score = 48;
//  let grade;

//  if(score >= 90 && socre <= 100 ){
//     grade = "A"
//  }else if (score >= 70 &&  score <= 89){
//     grade = "B"
//  } else if (score >= 60 && score <= 69){
//     grade = "C"
//  } else if (score >= 50 && score <= 50){
//     grade = "D"
//  } 
//     else if (score >= 0 && score <= 49){
//     grade = "fail"
//  }

// console.log(grade)

 // loops in javascript 

//  for( let i = 1; i<= 5; i++ ){
// console.log("Hello amaan")
//  }

 
 // for in loop 

//  let student = {
//     name: "amaan",
//     age: 23,
//     cgpa: 6.1
//  }

//  for(let i in student){
//     console.log(i, "-" , student[i])
//  }
  
 
// for of loop

// let star = "Mdrehan"

// let size = 0;
// for(let val of star){
//     size++;
//     console.log( val, val.length)
// }
//  // Qustion:- Print All even number from 0 to 100 
 
//  for(let i = 0; i <=100; i++){
//     if(i%2 === 0){
//         console.log("number =", i)
//     }
//  }
//  console.log("even number")

//  // for odd number

//  console.log("Odd number starts from here ")
//   for(let i = 0; i <=100; i++){
//     if(i%2 !== 0){
//         console.log("number =", i)
//     }
//  }


 // Guess the number Game 

//  let gameNum = 25;
// let userNum = prompt("Guess the number:");

// while (userNum != gameNum) {
//     userNum = prompt("Wrong number! Guess again:");
// }

// console.log("Congratulations! You guessed the correct number.");

// swaping of two variables :- 

// let a = 10;
// let b = 20;
// console.log(a,b)

// let temp = a;
// a = b; 
// b= temp;
// console.log(a,b)

// let name = "Amaan";

// let fullName = "Md Amanullah";;

// let temp1 = name;
// name = fullName;
// fullName = temp1;
// console.log(name,fullName)

// arrow finction 


function mul(a,b){
    return a*b;
};

const arrowMul = (a,b) => {
    console.log(a * b)
}
arrowMul(4,5)


// question 
//  function countVowel(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" ||  
//             char === "e" ||
//              char === "i" ||
//               char === "o" || 
//               char === "u" ){
//             count++;
//         }

//     }
//     return count;
//  }
//  console.log(countVowel("amaan"))

 // using arrow function 

//  const countVow = (str) => {
//     let count = 0;
//     for(const char of str){
//         if(char === "a" ||  
//             char === "e" ||
//              char === "i" ||
//               char === "o" || 
//               char === "u" ){
//             count++;
//         }

//     }
//     return count;
//  }

 // question using for each loop 

//  let array = [2,3,4,5,6,7,20,30];
 
//  array.forEach((num) => {
//     console.log(num*num)
//  });

 // array methods 1. map array 

//  let num1 = [23,44,55];

//  let newArr = num1.map((val) => {
//     return val * 2;
//  })
//  console.log(newArr)

// filter in array 

let number = [1,2,3,4,5,6,7,8];
let evenArr =  number.filter((val) =>{
    return val % 2 === 0;
})

console.log(evenArr) // 2,4,6,8 even number 

// for odd number 

let number1 = [1,2,3,4,5,6,7,8];
let oddNumber =  number1.filter((val) =>{
    return val % 2 !== 0;
})

console.log(oddNumber)// 1,3,5,7

// redue method 

let aarr = [1,2,3,4,5,6,7,8,9];

const output = aarr.reduce((res,curr) => {
    return res + curr;
})
console.log(output) // 45 output 

// to print a largest number in an arrya is 

let arr =[2,45,6,7,3,44,666]

const largestNumber = arr.reduce((res,curr) => {
    return res > curr ? res : curr;
})

console.log(largestNumber); // 666 

/*
question:- we are given array of marks of students . Filter out of the marks of student that scored 90
*/

let marks = [66,77,56,98,90,93] 

const toppers = marks.filter((val) => {
    return val >= 90;
})
console.log(toppers) // 98,90,93
    
 



