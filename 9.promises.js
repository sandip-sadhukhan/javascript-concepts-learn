// console.log("start")

// setTimeout(()=> {
//     console.log("middle") // runs after start and end
// }, 0)

// console.log("end")
// NOTE: Javascript runs sync code first then async code.


// const promise = new Promise((resolve, reject) => {
//     resolve("hello")
// }) 

// promise.then(function(res) {
//     console.log(res)
// })


// Promise.all() -> will call then when all promises are return. If any promise fail, it will fail the whole promise
// Promise.race() -> will call when first request resolve or reject.
// Promise.allSettled -> same as Promise.all() but if any promise resolve it will resolve the promies
// Promise.any -> same as rece, but it return as soon as first promise resolve, and ignore all rejeced once.  if all promises fail, then the promise fail.


// async/await
// function importantAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Subscribe to ${username}`)
//         }, 1000)
//     })
// }


// function likeTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Like the ${video} video`);
//         }, 100)
//     })
// }

// function shareTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`Share the ${video} video`);
//         }, 500)
//     })
// }

// const result = async () => {
//     try {
//         const message1 = await importantAction("Sandip");
//         const message2 = await likeTheVideo("Sandip");
//         const message3 = await shareTheVideo("Sandip");
//     } catch(error) {
//         console.error("Promises failed", error)
//     }
// }

// result();

// -------
// What is the output
// console.log("start")
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
// });

// promise1.then(res => {
//     console.log(res);
// })

// console.log("end");

// Output
// start
// 1
// end
// 2

// Reason -> Javascript engine run sync code first then async code.
// So it will initialize promise's sync code, and run async code ie. promise.then later


// What is the output
// console.log("start")

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
// })

// promise1.then(res => {
//     console.log(res);
// })

// console.log("end")

/*
Output
======
start
1
3
end
2
*/


// What is the output
// console.log("start")

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(3);
// })

// promise1.then(res => {
//     console.log(res);
// })

// console.log("end")

/*
Output
======
start
1
3
end

reason: promise is not resolved so then block will not executed.
*/


// What is the output
// console.log("start")

// const fn = () => 
//     new Promise((resolve, reject) => {
//         console.log(1);
//         resolve("success");
//     })

// console.log("middle")

// fn().then(res => {
//     console.log(res)
// })

// console.log("end")

/*
Output
start
middle
1
end
success

reason -> then always run after sync code.
*/
