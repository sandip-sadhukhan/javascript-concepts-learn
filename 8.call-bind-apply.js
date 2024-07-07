// Explicit Binding

// var obj = {name: "Sandip"}

// function sayHello(age) {
//     return "Hello " + this.name + " is " + age;
// }

// console.log(sayHello(23)) // prints "Hello  is 23"

// first argument is `this` argument.
// console.log(sayHello.call(obj, 23)) // prints "Hello Sandip is 23"

// What is apply
// same as call just take arguments as array
// console.log(sayHello.apply(obj, [23])) // prints "Hello Sandip is 23"

// What is bind?
// returns a function, which I can call later
// const bindFunc = sayHello.bind(obj);
// console.log(bindFunc(23)) // prints "Hello Sandip is 23"


// What is the output
// var status = "😎";

// setTimeout(() => {
//     const status = "😍";

//     const data = {
//         status: "🥑",
//         getStatus() {
//             return this.status;
//         },
//     };

//     console.log(data.getStatus());  // prints 🥑
//     console.log(data.getStatus.call(this)) // prints 😎 as 'this' refers the window object
// }, 0);


// Append an array to another array
// don't use concat as it return new array, but we don't want to change reference
// const array = ["a", "b"];
// const elements = [0, 1, 2];

// // other methods are there like loop though for loop, but use explicit binding here
// array.push.apply(array, elements)
// console.log(array) // ['a', 'b', 0, 1, 2]


// Find min/max numbers in an array
// const numbers = [5, 6, 2, 3, 7];

// // one solution
// console.log(Math.max(...numbers))

// // second solution
// console.log(Math.max.apply(null, numbers))


// What is the output
// function f() {
//     console.log(this);
// }

// let user = {
//     g: f.bind(null)
// }

// user.g(); // this refer to window object as we reset it by null.


// Bind chaining
// function f() {
//     console.log(this.name)
// }


// f =  f.bind({name: "John"}).bind({name: "Ann"})
// f(); // prints "John". Because once bind is used, that can't be rebound.


// Explicit binding with Arrow function
// const age = 10;

// var person = {
//     name: "Sandip",
//     age: 20,
//     getAgeArrow: () => console.log(this.age),
//     getAge: function() {
//         console.log(this.age)
//     }
// }

// var person2 = {age: 23}

// person.getAgeArrow.call(person2); // undefined
// person.getAge.call(person2); // 23

// Explaination for arrow function
// call doesn't make any difference for arrow function. Arrow function take reference
// from the parent function, which we don't have here so it will consider
// 'this' as global window object, and we don't have age in global object so
// this.age will be windowObject.age = undefined


// Polyfill for call method
// let car1 = {
//     color: "Red",
//     company: "Ferrari"
// }

// function purchaseCar(currency, price) {
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}.`)
// }

// purchaseCar.call(car1, "Rs", 5000000)

// Function.prototype.myCall = function(context={}, ...args) {
//     if (typeof this !== 'function') {
//         throw new Error(this + "It's not callable")
//     }

//     context.fn = this;
//     context.fn(...args);
// }

// purchaseCar.myCall(car1, "Rs", 5000000)

// Polyfill for apply
// Function.prototype.myApply = function(context={}, args=[]) {
//     if (typeof this !== 'function') {
//         throw new Error(this + "It's not callable")
//     }

//     if (!Array.isArray(args)) {
//         throw new TypeError("CreateListFromArrayLike called on this function")
//     }

//     context.fn = this;
//     context.fn(...args);
// }

// purchaseCar.myApply(car1, ["Rs", 5000000])

// Polyfill for bind
// Function.prototype.myBind = function(context={}, ...args) {
//     if (typeof this !== 'function') {
//         throw new Error(this + "cannot be found as it's not called on function")
//     }

//     context.fn = this;
//     return function(...newArgs) {
//         return context.fn(...args, ...newArgs)
//     }
// }

// const newFunc = purchaseCar.bind(car1, "Rs", "5000000")
// newFunc()

// const newFunc = purchaseCar.myBind(car1, "Rs", "5000000")
// newFunc()

// const newFunc = purchaseCar.myBind(car1)
// newFunc("Rs", "5000000")