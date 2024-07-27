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
function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1000)
    })
}


function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the ${video} video`);
        }, 100)
    })
}

function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Share the ${video} video`);
        }, 500)
    })
}

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


// What is the output?
// function job() {
//     return new Promise(function (resolve, reject) {
//         reject();
//     })
// }

// let promise = job();

// promise
//     .then(function() {
//         console.log("Success 1");
//     })
//     .then(function() {
//         console.log("Success 2");
//     })
//     .then(function() {
//         console.log("Success 3");
//     })
//     .catch(function() {
//         console.log("Error 1");
//     })
//     .then(function() {
//         console.log("Success 4");
//     })


// Output
// Error 1
// Success 4
// Reason -> after error it will resolve so success 4 will print

// .catch(error) {
//     console.log("something")
//     return "Hello"
// }
// .then(function(data) {
//     console.log(data)
// }

// This will print
// something
// then Hello as return "Hello" means promise resolved so it will go to then block

// .catch(error) {
//     console.log("something")
//     return new Error("test")
// }
// .then(function(data) {
//     console.log(data)
// }
// This also call then after error as return new Error('test') is not rejecting
// instead it is returning a value if we do throw Error then it will reject


// Promise chaining 
// const firstPromise = new Promise((resolve, reject) => {
//     resolve("First!");
// })

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
// })

// secondPromise.then((res) => {
//     return res;
// }).then(res => {
//     console.log(res); // First!
//     return res;
// })


// Solve Promise Recursively
// function promRecurse(funcPromises) {
//     if (funcPromises.length === 0) return;

//     const currentPromise = funcPromises.shift();

//     currentPromise.then(function(res) {
//         console.log(res)
//     }).catch((err) => console.log(err))

//     promRecurse(funcPromises);
// }

// promRecurse([
//     importantAction("Sandip Sadhukhan"),
//     likeTheVideo("Django video"),
//     shareTheVideo("React video")
// ])


// Promise Polyfill
// function PromisePolyFill(executer) {
//     let onResolve, onReject, isFullFilled=false, isCalled=false, value,
//     isRejected=false;

//     function resolve(val) {
//         isFullFilled = true;
//         value = val;

//         if (typeof onResolve === 'function') {
//             onResolve(val);
//             isCalled = true;
//         }
//     }
    
//     function reject(val) {
//         isRejected = true;
//         value = val

//         if (typeof onReject === 'function') {
//             onReject(val);
//             isCalled = true;
//         }
//     }

//     this.then = function(callback) {
//         onResolve = callback;

//         if (isFullFilled && !isCalled) {
//             isCalled = true;
//             onResolve(value);
//         }

//         return this;
//     }

//     this.catch = function(callback) {
//         onReject = callback;

//         if (isRejected && !isCalled) {
//             isCalled = true;
//             onReject(value);
//         }

//         return this;
//     }

//     try {
//         executer(resolve, reject)
//     } catch(error) {
//         reject(error);
//     }
// }

// const examplePromise = new PromisePolyFill((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2)
//     }, 1000)
// })

// examplePromise.then(res => console.log(res)).catch(err => console.log(err))


// Promise.all() Polyfill implementation
Promise.allPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
        const results = [];

        if (!promises.length) {
            resolve(results);
            return;
        }

        let pending = promises.length;

        promises.forEach((promise, idx) => {
            Promise.resolve(promise).then((res) => {
                results[idx] = res;
                pending --;

                if (pending === 0) {
                    resolve(results)
                }
            }, reject)
        })
        
    })
}

Promise.allPolyfill([
    importantAction("Sandip Sadhukhan"),
    likeTheVideo("Django video"),
    shareTheVideo("React video")
]).then(function(res) {
    console.log(res)
})
