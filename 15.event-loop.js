// sync functions
// console.log(1)
// console.log(2)
// console.log(3)


// Async functions
// console.log(1)
// setTimeout(function() {
//     console.log(2)
// }, 1000)
// console.log(3)
// Output: 1 3 2

// console.log(1)
// setTimeout(function() {
//     console.log(2)
// }, 0)
// console.log(3)
// Output: 1 3 2

// Why 3 printed before 2?
// Reason is this is how event loop works in Javascript

/*
Event loop consists of 3 components

- Call Stack: It is LIFO technique stack, so we add function call on over each other, and execute from top to bottom.
              For example if function A call function B, then in callstack it will be B() then under that A(), so B execute
              first then A will execute.
- Microtask Queue: Promises are added here, it is high priority queue than callback or task queue.
- Task Queue/Callback Queue: Other web apis which is not directly comes under inbuilt Javascript like window object eg- setTimeout etc
                  are added here.

A good playground website is https://www.jsv9000.app/
*/

// console.log("start")

// setTimeout(() => {
//     console.log("Inside setTimeout (macro-task)")
// }, 0)

// Promise.resolve().then(() => {
//     console.log("Inside Promise (micro-task)")
// })

// console.log("End")

// Output
// start
// End
// Inside Promise (micro-task)
// Inside setTimeout (macro-task)


/* Question: What is Event loop?
Javascript is single threaded and the event loop is responsible for how its
asynchronous behavior happens.

The event loop is like a traffic controller in Javascript that manages the
execution of the code. It ensures tasks are processed in an orderly mannner,
handling async operations by continuously checking if there are pending tasks
in queue(microtasks and macrotasks).
*/


/*
Question: Why we need event loop to manage these task queue and microtask queue?
=> Even though setTimeout and Promise resolved at the same time, but still we run
Promise first and then setTimeout code, to manage these stuff we need event loop.
*/


// What is the output?
// blockMainThread();
// console.log("Start");

// function blockMainThread() {
//     const start = Date.now();
//     while (Date.now() - start < 3000)  {}
//     console.log("running..")
// }

// console.log("End")

// Output
// running..
// Start
// End

// blockMainThread function will block main thread for 3s as this is sync operation
// and after 3s it will print running.. then start and then End


// What is the output?
// setTimeout(function a() {
//     console.log("a")
// }, 1000);

// setTimeout(function b() {
//     console.log("b")
// }, 500);

// setTimeout(function c() {
//     console.log("c")
// }, 0);

// function d() {
//     console.log("d Runs")
// }

// d();

// Output
// d Runs
// c
// b
// a


// What's the output?
// function a() {
//     for (var i=0; i< 3; i++) {
//         setTimeout(function log() {
//             console.log(i);
//         }, i*1000)
//     }
// }
// a();

// Output
// 3
// 3
// 3

// Reason: var is not block scoped.


// What's the output?
// Promise.resolve()
//     .then(function a() {
//         Promise.resolve().then(function d() {
//             console.log("d Runs");
//         });

//         Promise.resolve().then(function e() {
//             console.log("e Runs");
//         });

//         throw new Error("Error Occured!")

//         Promise.resolve().then(function f() {
//             console.log("f Runs");
//         });
//     })
//     .catch(function b() {
//         console.log("b Runs");
//     })
//     .then(function c() {
//         console.log("c Runs");
//     })

// Output
// d Runs
// e Runs
// b Runs
// c Runs


// What's the output?
// function pause(millis) {
//     return new Promise(function p(resolve) {
//         setTimeout(function s() {
//             resolve("resolved");
//         }, millis);
//     })
// }

// const start = Date.now();
// console.log("Start")

// pause(1000).then((res) => {
//     const end = Date.now();
//     const secs = (end - start) / 1000;
//     console.log(res, ":", secs)
// })

// Output
// Start
// resolved:1.001

