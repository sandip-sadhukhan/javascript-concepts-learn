// Map
// const nums = [1, 2, 3, 4];
// const multiplyThree = nums.map((num) => num * 3);
// console.log(multiplyThree);

// Filter
// const nums = [1, 2, 3, 4];
// const moreThanTwo = nums.filter((num) => num > 2);
// console.log(moreThanTwo);

// Reduce - Takes callback function and initial value
// If initial value not provided, then it takes first element from list
// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

// Polyfill -> Implement inbuilt function
// Polyfill for map()
// cb stands for callback function.
// 'this' refers to the array on which map is called.
// Array.prototype.myMap = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }

//   return temp;
// };
// const nums = [1, 2, 3, 4];
// const multiplyThree = nums.myMap((num) => num * 3);
// console.log(multiplyThree);

//
// Polyfill for filter()
// Array.prototype.myFilter = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }

//   return temp;
// };
// const nums = [1, 2, 3, 4];
// const moreThanTwo = nums.myFilter((num) => num > 2);
// console.log(moreThanTwo);

//
// Polyfill for reduce()
// Array.prototype.myReduce = function (cb, initialValue) {
//   let acc = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     acc = [null, undefined].includes(acc) ? this[i] : cb(acc, this[i], i, this);
//   }

//   return acc;
// };
// const nums = [1, 2, 3, 4];
// const sum = nums.myReduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

// students
//   .map((student) => {
//     if (student.marks < 60) {
//       student.marks += 20;
//     }
//     return student;
//   })
//   .filter((student) => student > 60)
//   .reduce((acc, curr) => acc + curr.marks, 0);
