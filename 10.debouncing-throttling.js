// Debouncing and Throttling in Javascript


// Question 1: Create a button UI and add debounce as follows =>
// -> Show "Button Pressed <X> Times" every time button is pressed
// -> Increase "Triggered <Y> Times" count after 800ms of debounce

/* Using Lodash */
// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed")
// const count = document.querySelector(".increment_count")

// let pressedCount = 0;
// let triggerCount = 0;

// const debounceCount = _.debounce(() => {
//     count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     debounceCount();
// })


// Question 2: Create a button UI and add throttle as follows =>
// -> Show "Button Pressed <X> Times" every time button is pressed
// -> Increase "Triggered <Y> Times" count after 800ms of throttle

/* Using Lodash */
// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed")
// const count = document.querySelector(".increment_count")

// let pressedCount = 0;
// let triggerCount = 0;

// const throttledCount = _.throttle(() => {
//     count.innerHTML = ++triggerCount;
// }, 800)


// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     throttledCount();
// })


// Question 3: Create Debounce() Polyfill Implementation
// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed")
// const count = document.querySelector(".increment_count")

// let pressedCount = 0;
// let triggerCount = 0;

// // cb => callback
// // d => delay
// const myDebounce = (cb, d) => {
//     let timer;

//     return function(...args) {
//         if (timer) clearTimeout(timer);
    
//         timer = setTimeout(() => {
//             cb(...args);
//         }, d)
//     }
// }

// const debounceCount = myDebounce(() => {
//     count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     debounceCount();
// })


/// Question 4: Create Throttle() Polyfill implementation
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed")
const count = document.querySelector(".increment_count")

let pressedCount = 0;
let triggerCount = 0;

const myThrottle = (cb, d) => {
    let last = 0;

    return function(...args) {
        let now = new Date().getTime();

        if (now - last < d)  return;

        last = now;

        return cb(...args);
    }
}

const throttledCount = myThrottle(() => {
    count.innerHTML = ++triggerCount;
}, 800)


btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    throttledCount();
})