// Currying
// Convert f(a,b) into f(a)(b)

// function f(a,b) {
//     console.log(a,b)
// }
// f(1,2)

// after convert
// function f(a) {
//     return function (b) {
//         console.log(a,b)
//     }
// }

// f(1)(2)

// Infinite sum
// add(1)(2)(3)...(n)
// function add(a) {
//     return function(b) {
//         if (b) return add(a + b);
//         return a;
//     }
// }

// console.log(add(5)(2)(4)(8)())


// Partial Application
// Here we have 3 argument but we return 2 function so it is a partial application.
// If we return 3 functions then it is currying.
// function sum(a) {
//     return function (b,c) {
//         return a + b + c;
//     }
// }

// const x = sum(10);
// console.log(x(5,6))


// curry() implementation
// converts f(a,b,c) into f(a,b,c)

// function curry(func) {
//     return function curriedFunc(...args) {
//         if (args.length >= func.length) {
//             return func(...args)
//         } else {
//             return function(...next) {
//                 return curriedFunc(...args, ...next)
//             }
//         }
//     }
// }

// const sum = (a, b, c, d) => a + b + c + d;

// const totalSum = curry(sum)

// console.log(totalSum(1)(6)(5)(6))