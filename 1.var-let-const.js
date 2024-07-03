// var vs let vs const
// Scope

// this will work fine
// {
//   var a = 5;
// }

// console.log(a);

// // But this will not work
// {
//   let b = 5;
// }

// console.log(b);

// same with const, it will not work outside block

// Variable Shadowing
// function test() {
//   let a = "Hello";

//   if (true) {
//     let a = "Hi";
//     console.log(a);
//   }
//   console.log(a);
// }

// test();

// If we initially used let a, then in if block if we use var a. then it will
// throw error.
// Uncaught SyntaxError: Identifier 'a' has been declared. because it is
// illegal shadowing.
// first var a, then let a is fine.

// Fine
// var a;
// var a;

// Throw error
// let b;
// let b;

// Throw error
// const c;
// const c;

// Fine
// let a;
// {
//   let a;
// }

// var a; // fine
// let b; // fine
// const c; // not fine

// const a = 4;
// a = 5; // Throw error
// Same for let or var is valid.

// Hoisting
//
// During javascript creation phase, it move variable declaration at top
// of the file.
// console.log(count); // prints undefined, instead of throwing error
// var count = 1;

// Because js execute like this
// var count;
// console.log(count);
// count = 1;

// For 'let' it will throw error.
// console.log(count);
// let count = 1; // ReferenceError: Cannot access 'count' before initialization.
// Hoisting happens in temp dead zone for let so it throw error.
// Temporary dead zone Means a state where variables are in scope, but not yet declared.

// function abc() {
//   console.log(a); // prints undefined

//   var a = 10;
// }
// abc();

// function abc() {
//   console.log(a, b, c); // throws error: Cannot access 'b' before initialization.

//   var a = 10;
//   let b = 20;
//   const c = 30;
// }
// abc();
