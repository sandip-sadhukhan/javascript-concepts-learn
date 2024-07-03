// Function declaration/ statement/ definition
// function abc() {
//   // ...
// }

// Function expression - store inside a variable
// const square = function () {
//   // ...
// };
// = function()..... part is called anonymous function.

// First class functions?
// functions treated as variable, can pass as parameter, return as parameter
// function square(num) {
//   return num * num;
// }

// function displaySquare(fn) {
//   console.log("Square is", fn(5));
// }

// displaySquare(square);

//
// What is IIFE ?
// IIFE => Immediately invoke function expression
// (function square(num) {
//     console.log(num * num)
// })(5);

// Function scope
// for (let i=0;i<5;i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, i*1000)
// }
// prints - 0 1 2 3 4

// for (var i=0;i<5;i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, i*1000)
// }
// prints - 5 5 5 5 5

// For function name - it is hoisted differently. For variable if we print out
// before initialization (var) then it print undefined. but for function it will
// be copy of the function instead of undefined.

// What will be output?
// var x = 21;

// var fun = function () {
//     console.log(x); // print undefined, as it is not initialized in this block.
//     // it is in locally so it will not check global scope.
//     var x = 20;
// }

// fun();

// Params Vs Arguments
// function square(num) { // num is params
//     console.log(num * num);
// }

// square(5); // 5 is argument


// Rest operator vs spread operator
// function multiply(...nums) { // ...nums is using rest operator
//     console.log(nums[0] * nums[1]);
// }

// var arr = [5,6]
// multiply(...arr); // ...arr is using spread operator

let user = {
    username: "Sandip",
    rec1: () => {
        console.log("Subscribe to " + this.username)
    },
    rec2() {
        console.log("Subscribe to " + this.username)
    }
}

user.rec1() // prints Subscribe to undefined | Because this denotes the function
user.rec2() // prints subscribe to Sandip | Because this denotes user object.
