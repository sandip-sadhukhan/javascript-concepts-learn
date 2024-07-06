// const func = (function (a) {
//     delete a;
//     return a;
// })(5);

// console.log(func) // prints 5 | as delete is to delete object keys and not local variable

// Add dynamic property in object | wrap inside []
// const property = "firstName"
// const name = "Sandip"

// const user = {
//     [property]: name
// }
// console.log(user.firstName)


// Loop through object  
// const user = {
//     name: "Sandip Sadhukhan",
//     age: 24,
//     isTotallyAwesome: true
// }

// for (key in user) {
//     console.log(key, user[key])
// }


// What will be output?
// const obj = {
//     a: "one",
//     b: "two",
//     a: "three"
// }
// console.log(obj) // {a: 'three', b: 'two'} | because last value will considered
// // and a will show first as its initial position is first.


// Create a function multiplyByTwo(obj) that multiplies all numeric property 
// values of num by 2
// let nums = {
//     a: 100,
//     b: 200,
//     title: "My nums"
// }

// multiplyByTwo(nums);

// function multiplyByTwo(obj) {
//     for (key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2
//         }
//     }
// }
// console.log(nums)


// What will be output
// const a = {};
// const b = {key: "b"}
// const c = {key: "c"}

// a[b] = 123
// // now a is {'[object Object]': 123}
// a[c] = 456
// // now a is {'[object Object]': 456}
// // as both b & c converted to same key '[object Object]'

// console.log(a[b]) // 456


// What will be output
// console.log([..."Lydia"]) // ['L', 'y', 'd', 'i', 'a']


// What will be output
// const settings = {
//     username: "Sandip",
//     level: 99,
//     health: 100
// };

// const data = JSON.stringify(settings, ["level", "health"])
// console.log(data) // {"level":99,"health":100}
// if we pass 2nd array argument, it will only convert those keys and ignore other keys.


// What's the output
// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius
// }

// console.log(shape.diameter()); // 20
// console.log(shape.perimeter()); // NaN || As perimeter function this.radius will be undefined


// Whats the output
// let person = {name: 'Sandip'}
// const members = [person]
// person = null;
// console.log(members) // [{name: "Sandip"}]
// Because we are just setting person variable 
// if we do person.name = "something" that will change in array as well.


// How to deep copy object
// userClone = Object.assign({}, user)
// Another way
// JSON.parse(JSON.stringfy(user))
// Another way {...user}