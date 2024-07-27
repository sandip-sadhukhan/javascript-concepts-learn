// Event bubbling
// Events are executed from bottom to top
// Like here we have div. under that div we have form, under that form we have button
// Div -> Form -> Button
// Now if we click Button then first event of Button will execute then Form then div
// Order of event: Button -> Form -> Div

// const div = document.querySelector('div');
// const form = document.querySelector('form');
// const button = document.querySelector('button');

// // Third this will called
// div.addEventListener("click", function() {
//     alert("div")
// })

// // Second this
// form.addEventListener("click", function() {
//     alert("form")
// })

// // First this
// button.addEventListener("click", function() {
//     alert("button")
// })


// Event Propagation in Javascript
// Question: event.target vs this.target vs event.currentTarget
// const div = document.querySelector('div');
// const form = document.querySelector('form');
// const button = document.querySelector('button');

// // Third this will called
// div.addEventListener("click", func);
// form.addEventListener("click", func);
// button.addEventListener("click", func);

// function func(event) {
//     console.log(`currentTarget=${event.currentTarget.tagName},target=${event.target.tagName}, this=${this.tagName}`)
// }
// If we click Button then this will console log
// currentTarget=BUTTON,target=BUTTON, this=BUTTON
// currentTarget=FORM,target=BUTTON, this=FORM
// currentTarget=DIV,target=BUTTON, this=DIV


// Event Capturing/Trickling?
// const div = document.querySelector('div');
// const form = document.querySelector('form');
// const button = document.querySelector('button');

// div.addEventListener("click", function() {
//     alert("div")
// }, {capture: true})

// form.addEventListener("click", function() {
//     alert("form")
// }, {capture: true})

// button.addEventListener("click", function() {
//     alert("button")
// }, {capture: true})

// Now when we click button then it will alert -> "div" then "form" then "button"


// How to stop bubbling or capturing?
// const div = document.querySelector('div');
// const form = document.querySelector('form');
// const button = document.querySelector('button');

// div.addEventListener("click", function(e) {
//     e.stopPropagation()
//     alert("div")
// })

// form.addEventListener("click", function(e) {
//     e.stopPropagation()
//     alert("form")
// })

// button.addEventListener("click", function(e) {
//     e.stopPropagation()
//     alert("button")
// })
// If we click "button", then it will only show one alert "button"


/*
What is Event Delegation?
=> Where we add event listener to parent element instead of descendant elements.
This is useful if we have too many descendant elements so we can add single
event listener to parent instead of too many event listener each for one
descendent element.
*/

// document.querySelector(".products").addEventListener("click", (event) => {
//     var span = event.target.closest("SPAN") // To handle <b> tag, so event
// target will be b, so we need to find span there

//     if (span) {
//         window.location.href += "/" + event.target.className;
//     }
// });


// Question: We want that when we click Button, then form event should be
// executed first, then button event then div event. 
// const div = document.querySelector('div');
// const form = document.querySelector('form');
// const button = document.querySelector('button');

// div.addEventListener("click", function() {
//     alert("div")
// })

// form.addEventListener("click", function() {
//     alert("form")
// }, {capture: true}) // Solution: When we will click button, then due to capture
// // Form event will occur, then button at last the div as div doesn't have capture

// button.addEventListener("click", function() {
//     alert("button")
// })


// Question: Create a Modal which closes by clicking on negative space.
// const container = document.querySelector(".modalContainer");
// const button = document.querySelector(".modalButton");

// button.addEventListener("click", () => {
//   toggleModal(true);
// });

// function toggleModal(toggle) {
//   container.style.display = toggle ? "flex" : "none";
// }

// container.addEventListener("click", (event) => {
//     if (event.target.className === 'modalContainer') {
//         toggleModal(false);
//     }
// })