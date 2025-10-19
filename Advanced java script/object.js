//  What is Object-Oriented Programming (OOP)?
/**
Object-Oriented Programming is a way of writing code where you organize everything into objects.
Objects represent real-world things — like a car, person, user, or product — each having:

Properties (data) → like name, age, color

Methods (actions) → like walk(), drive(), login()
 */

// 1: Simple Object Example.

const person = {
    name:"Amaan",
    age: 20,
    greet: function(){
        console.log("Hello my name is " + this.name);
    }
}

person.greet();

/**
Here:

person is an object

name and age are properties

greet() is a method
 */

// OOP Concepts in JavaScript :- JavaScript supports OOP through the following key concepts 👇

//  1. Class :- A class is like a blueprint for creating multiple similar objects. 

class person1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello my name is ${this.name} and i am ${this.age} years old.`);
    }
}

const p1 = new person1("Amaan" , 20);
const P2 = new person1("sara ", 23);


p1.greet();
P2.greet();


// 2. Inheritance :- One class can inherit (reuse) properties and methods from another class.

class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks.`);
    }
}

const Animal1 = new Animal("Animal");
Animal1.speak(); 

const dog = new Dog("Dog");
dog.speak();   

/**
 * Here:

Dog inherits from Animal using extends

It can use or override the parent’s methods
 */

//  3. Encapsulation :- Keeping data private inside the object, and accessing it only through methods.

class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ₹${amount}`);
  }

  getBalance() {
    console.log(`Balance: ₹${this.#balance}`);
  }
}

const account = new BankAccount();
account.deposit(500);
account.getBalance();

// #balance is private — it can’t be accessed outside the class.

// 4. Polymorphism :- Same method name but different behavior in different classes. 

    class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a square");
  }
}

const shapes = [new Circle(), new Square()];

shapes.forEach(shape => shape.draw());


//  5. Abstraction (Conceptual):- Hiding complex details and showing only what’s necessary.Example: You call car.start() — you don’t need to know how the engine works inside. 











