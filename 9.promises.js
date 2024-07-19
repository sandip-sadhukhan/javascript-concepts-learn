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
