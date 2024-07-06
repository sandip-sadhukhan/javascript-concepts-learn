// What is Lexical Scope?
// We have global scope, local scope(under function), block scope(under if for loop etc)
//
// variable defined outside of local scope can be accessed in global scope.
// like:
// var username = "sandip";
// // global scope
// function local() {
//     // local scope
//     console.log(username) // accessible
// }
// local()

// But this will not work
// global scope
// function local() {
//     // local scope
//     var username = "sandip";
// }
// local()
// console.log(username) // not accessible


// // global scope
// function subscribe() {
//     var name = "Sandip";

//     // inner scope 2
//     function displayName() {
//         // inner scope
//         alert(name);
//     }

//     displayName();
// }
// subscribe()
// In the above example displayName is called closures
// Bascially clauser means when a inner function can access variables of outer
// function.


// Closure Scope chain
// Every closure has three scopes:
// 1. Local scope
// 2. Outer Function scope
// 3. Global scope
// Function A {
//     Function B {
//         Function C {

//         }
//     }
// }
// Function C will have scope of Function B & A as well.



// Closure practical example
// for (var i=0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i); // What will be logged?
//     }, i*1000)
// }
// It will print 3 three times.
// Why? because var is a function scope not block scoped. So i will be 
// 0 then 1 then 2 then 3. After that we console log so it will be 3 in each cases
// 
// How to avoid this and print 0 1 2?
// use let as it is block scoped.
// for (let i=0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i); // prints 0 1 2
//     }, i*1000)
// }
//
// What if we don't allowed to use let and need to print 0 1 2
// for (var i=0; i < 3; i++) {
//     function inner(i) { // now i is a local variable
//         setTimeout(function log() {
//             console.log(i); // prints 0 1 2
//         }, i*1000)
//     }
//     inner(i);
// }


// How would you use a closure to create a private counter?
// function counter() {
//     var _counter = 0; // _ is optional, but recommended for readability

//     function add(increment) {
//         _counter += increment;
//     }

//     function retrieve(increment) {
//         return "Counter = " + _counter;
//     }

//     return {
//         add, retrieve
//     }
// }

// const c = counter();
// c.add(5);
// c.add(10);
// console.log(c.retrieve());


// What is a module pattern?
// var Module = (function() {
//     function privateMethod() {
//         // ...
//     }

//     return {
//         publicMethod: function () {
//             // ...
//         }
//     }
// })();

// Module.publicMethod()
// Module.privateMethod() // throw error



// Run this code only once
// let view;
// function likeTheVideo() {
//     view = "Sandip";
//     console.log("subscribe to", view)
// }

// likeTheVideo()
// likeTheVideo()
// likeTheVideo()
// likeTheVideo()

// solution
// let view;
// function likeTheVideo() {
//     let called = 0;

//     return function () {
//         if (called > 0) {
//             console.log("Already subscribed")
//         } else {
//             view = "Sandip";
//             console.log("subscribe to", view)
//             called++;
//         }
//     }
// }

// let isSubscribed = likeTheVideo();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// Not proper solution but it will work


// We have once function in lodash, this is Polyfill for this
// it will call the function only once.
// function once(func, context) {
//     let ran;

//     return function() {
//         if (func) {
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }

//         return ran;
//     }
// }

// const hello = once(() => console.log("hello"))
// hello();
// hello();
// const hello2 = once((a,b) => console.log("hello", a, b))
// hello2(1, 2);
// hello2(1, 2);
// hello2(1, 2);


// Memorize Polyfill
// Optimize this function
// const clumsyProduct = (num1, num2) => {
//     for (let i =1; i<=100000000; i++) {

//     }

//     return num1 * num2;
// }

// console.time("First call");
// console.log(clumsyProduct(1000, 2000))
// console.timeEnd("First call");

// console.time("Second call");
// console.log(clumsyProduct(1000, 2000))
// console.timeEnd("Second call");

// solution
// function myMemoize(fn, context) {
//     const res = {};
//     return function(...args) {
//         var argsCache = JSON.stringify(args);

//         if (!res[argsCache]) {
//             res[argsCache] = fn.call(context || this, ...args);
//         }

//         return res[argsCache];
//     }
// }

// const clumsyProduct = (num1, num2) => {
//     for (let i =1; i<=100000000; i++) {

//     }

//     return num1 * num2;
// }

// const memorizedClumsyProduct = myMemoize(clumsyProduct);

// console.time("First call");
// console.log(memorizedClumsyProduct(1000, 2000))
// console.timeEnd("First call");

// console.time("Second call");
// console.log(memorizedClumsyProduct(1000, 2000))
// console.timeEnd("Second call");


// Differentiate between Closure and Scope.
// Explanation: Closure refers to a function's ability to retain access to
// variables from its lexical scope even after that scope has closed, while
// scope refers to the visibility and accessibility of variables within a
// specific context, such as global scope, function scope, or block scope.