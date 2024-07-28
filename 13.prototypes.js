// let obj = {
//     name: "Sandip Sadhukhan",
//     age: 25,
// }

// console.log(obj.__proto__);
// console.log(Object.prototype)

// let num = 10;
// let name = "Sandip Sadhukhan"
// let bool = true;

// console.log(num.__proto__)
// console.log(num.toFixed(2))

// console.log(name.__proto__.__proto__)

// function add(a,b) {
//     return a + b;
// }

// console.log(add.__proto__.__proto__)



// What is prototype chaining ?
// let person = {
//     name: "Sandip Sadhukhan",
//     age: 23,
//     toString: () => {
//         console.log("convert to string")
//     }
// }
// console.log(person.alias()) // give error
// console.log(person.toString())// first it tries to find the function inside the object,
// if not present then it go to prototype to find the function.
// This is called prototype chaining.


// let additional = {
//     username: "Sandip",
//     alias: function() {
//         console.log(`${this.name} is also known as ${this.username}`)
//     }
// }

// person.__proto__ = additional // not recommended in prod
// console.log(person.alias()) // will print out `Sandip Sadhukhan is also known as Sandip`

// NOTE: If we add name in additional
// let additional = {
//     name: "Something",
//     username: "Sandip",
//     alias: function() {
//         console.log(`${this.name} is also known as ${this.username}`)
//     }
// }
// person.__proto__ = additional // not recommended in prod
// console.log(person.alias()) // will print out `Sandip Sadhukhan is also known as
// Sandip`. Because this.name exists on the main object so it will not take
// "Something" name from additional.


// Prototype Inheritance
// function Animal(name) {
//     this.name = name;
// }

// Add a method to the prototype
// Animal.prototype.sayName = function() {
//     console.log("My name is " + this.name);
// }

// var animal1 = new Animal("Tiger")

// function Dog(name, breed) {
//     Animal.call(this, name)
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog

// Dog.prototype.bark = function () {
//     console.log("Bhokk");
// }

// var dog1 = new Dog("Pengi", "LocalDog")


// Question 1: What will be the output of the following code?
// function Vehicle() {}
// Vehicle.prototype.drive = function() {
//     console.log("Driving a vehicle");
// }

// function Car() {}
// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;
// Car.prototype.drive = function() {
//     console.log("Driving a car");
// }

// var vehicle = new Vehicle();
// var car = new Car();

// vehicle.drive(); // Driving a vehicle
// car.drive(); // Driving a car


// Question 2: Explain the difference between __proto__ and prototype in Javascript.
/* 

__proto__ => It is an object property that points to the prototype of the object.
             It is used for inheritance and allows accessing the prototype chain.

prototype => It is a property that exists on constructor functions and is used to
             setup inheritance for objects created by that constructor function.
             It defines properties and methods shared by all instances created
             by that constructor function.
*/


// Question 3: What is setPrototypeOf?
// Define a prototype object
// var animalPrototype = {
//     sound: function() {
//         console.log("making a sound...")
//     }
// }

// // Create an object with animalPrototype as its prototype
// var dog = Object.create(animalPrototype);

// // Create another object with a different prototype
// var cat = {
//     purr: function() {
//         console.log("Purring...")
//     }
// }

// // Replace prototype | Now you can't find sound function as prototype is replaced.
// Object.setPrototypeOf(dog, cat);


// Question: How to create an object without a prototype in Javascript?
// var obj1 = Object.create(null);
// console.log(obj1);


// Question: What will be the output of the following code?
// function A() {}
// A.prototype.foo = 10;

// function B() {}
// B.prototype = Object.create(A.prototype);
// B.prototype.constructor = B;
// B.prototype.foo = 20;

// function C() {}
// C.prototype = Object.create(B.prototype);
// C.prototype.constructor = C;
// C.prototype.foo = 30;

// var obj1 = new A();
// var obj2 = new B();
// var obj3 = new C();

// console.log(obj1.foo) // 10
// console.log(obj2.foo) // 20
// console.log(obj3.foo) // 30


// Question: Deep Clone an object in JS
// var obj1 = {
//     a: 1,
//     b: {
//         c: 2,
//         d: [3, 4]
//     }
// }

// Inbuilt JS function
// var deepCloneObj = structuredClone(obj1)
// console.log(deepCloneObj)

// Manual
// function deepClone(obj) {
//     // Handle null and non-object types
//     if (obj === null || typeof obj !== "object") {
//         return obj;
//     }

//     // Create a new object or array based on type of input object.
//     var clone = Array.isArray(obj) ? [] : {};

//     for (var key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             clone[key] = deepClone(obj)
//         }
//     }

//     return clone;
// }

// var deepCloneObj = structuredClone(obj1)
// console.log(deepCloneObj)