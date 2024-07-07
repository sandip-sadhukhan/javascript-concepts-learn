// What is 'this' ?
// console.log(this) // prints global window object

// function func {
//     this // refers to global object
// }

// const func1 = () => {
//     this // refer to global object
// } 

// let user = {
//     name: "Sandip",
//     age: 23,
//     getDetails() {
//         console.log(this) // this denotes this object
//     },
//     abc: () => {
//         console.log(this) // this denotes global object as it takes parent of the outer object.
//     }
// }

// // user.getDetails()
// user.abc()


// class User {
//     constructor(n) {
//         this.name = n;
//     }

//     getName() {
//         console.log(this.name); // this refers the class instance here.
//     }
// }

// const user = new User('Sandip');
// user.getName()


// What is output
// function makeUser() {
//     return {
//         name: "Sandip",
//         ref: this,
//     };
// }

// let user = makeUser();

// console.log(user.ref.name) // nothing will print as ref is the global window object

// in above example, how to fix such a way that it will print the name?
// function makeUser() {
//     return {
//         name: "Sandip",
//         ref() {
//             return this
//         }
//     };
// }
// let user = makeUser();
// console.log(user.ref().name) // print Sandip


// What is the output
// const user = {
//     name: "Sandip Sadhukhan",
//     logMessage() {
//         console.log(this.name); // what is the output?
//     }
// } 

// setTimeout(user.logMessage(), 1000)
// Nothing will print in output
// setTimeout is taking it as callback not calling as normal method
// so this will have window object which doesn't have any name so print nothing

// to fix this wrap inside function
// prints Sandip Sadhukhan as it is invoke as normal method.
// setTimeout(function() {
//     user.logMessage()
// }, 1000)


// What is the output
// var length = 4;
// function callback() {
//     console.log(this.length) // what will be the output?
// }

// const object = {
//     length: 5,
//     method(fn) {
//         fn()
//     }
// }

// object.method(callback);
// output 4, because this will be the global object as, it is calling from
// method function. so there it will refer to global object.


// what is the output
// var length = 4;
// function callback() {
//     console.log(this.length) // what will be the output?
// }

// const object = {
//     length: 5,
//     method(fn) {
//         arguments[0]();
//     }
// }

// object.method(callback, 2, 3);
// this denotes the arguments array which has 3 element, the callback function, 2 and 3. 
// so this.length will be 3.

// -2.09s of this keywrod

// Implement calc
// const result = calc.add(10).multiply(5).subtract(30).add(10)...

// const calc = {
//     total: 0,
//     add(a) {
//         this.total += a;
//         return this
//     },
//     subtract(a) {
//         this.total -= a;
//         return this
//     },
//     multiply(a) {
//         this.total *= a;
//         return this
//     },
// }
// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total)