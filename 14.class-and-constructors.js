// class Teacher {
//     constructor(name, channel) {
//         this.name = name;
//         this.channel = channel;
//     }

//     intro() {
//         return `Hey its ${this.name}! Welcome to ${this.channel}`
//     }
// }

// const sandip = new Teacher("Sandip", "Youtube")
// console.log(sandip.intro());

// class Teacher {
//     constructor(name, channel, likes=0) {
//         this.name = name;
//         this.channel = channel;
//         this.videoLikes = likes;
//     }

//     intro() {
//         return `Hey its ${this.name}! Welcome to ${this.channel}`
//     }

//     like() {
//         this.videoLikes++;
//         return `Liked this video! Current likes: ${this.videoLikes}`;
//     }
// }

// const sandip = new Teacher("Sandip", "Youtube")
// console.log(sandip.intro());
// console.log(sandip.like())
// console.log(sandip.like())
// console.log(sandip.like())

// const sandip2 = new Teacher("Sandip2", "BongTuts")


// Question:Convert the above using function constructor
// function Teacher(name, channel, likes=0) {
//     this.name = name;
//     this.channel = channel;
//     this.videoLikes = likes;
// }
// Teacher.prototype.intro = function() {
//     return `Hey its ${this.name}! Welcome to ${this.channel}`
// }
// Teacher.prototype.like = function() {
//     this.videoLikes++;
//     return `Liked this video! Current likes: ${this.videoLikes}`;
// }

// const sandip = new Teacher("Sandip", "Youtube")
// console.log(sandip.intro());
// console.log(sandip.like())
// console.log(sandip.like())
// console.log(sandip.like())
// const sandip2 = new Teacher("Sandip2", "BongTuts")


// Inheritance
// class Teacher {
//     constructor(name, channel, likes) {
//         this.name = name;
//         this.channel = channel;
//         this.videoLikes = likes;
//     }

//     intro() {
//         return `Hey its ${this.name}! Welcome to ${this.channel}`
//     }
// }

// class YoutubeTeacher extends Teacher {
//     constructor(name, channel, likes, subscribers) {
//         super(name, channel, likes);
//         this.subscribers = subscribers;
//     }

//     subscribersCount() {
//         return `${this.channel} has ${this.subscribers} subscribers.`
//     }

//     static paidCourse() {
//         console.log(this.subscribers) // is undefined, as we can't access this inside static
//         return new YoutubeTeacher("Sandip", "BongTuts", 440, "444")
//     }
// }

// // const ytTeacher = new YoutubeTeacher("Sandip", "BongTuts", 100, "800")
// // console.log(ytTeacher.subscribersCount())
// // console.log(ytTeacher.intro())

// const ytTeacher2 = YoutubeTeacher.paidCourse();


// Question: Explain the difference between a class and an object in Javascript.
// Class is the blueprint of the object.
// Object are the actual instance of that class that we create.


// Question: What is the output of this code?
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }
// }

// const square = new Rectangle(5, 5);
// const rect = new Rectangle(4, 6);
// console.log(square.area()) // 25
// console.log(rect.area()) // 24


// Question: How does inheritance work in Javascript classes?
// Answer: Inheritance in Javascript classes is achieved using the extends keyword.
// It allows a subclass(child class) to inherit properties and methods from a
// super class (parent class).


// // What is the output?
// class Employee {
//     constructor() {
//         this.name = "Sandip";
//     }

//     constructor() {
//         this.age = 30;
//     }
// }

// var employeeObject = new Employee();
// console.log(employeeObject.name);
// // This will throw this error.
// // Uncaught SyntaxError: A class may only have one constructor


// Which approach is better?
// const jamesBond = {
//     firstName: "James",
//     lastName: "Bond",
//     getFullName: function() {
//         return `${this.firstName} ${this.lastName}`.trim();
//     }
// }

// console.log(jamesBond.getFullName())

// // or
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`.trim();
// }

// const jamesBond2 = new Person("James2", "Bond2");
// console.log(jamesBond2.getFullName())

// 2nd approach is better, because in first one for each copy of object the function
// is maintain in closure of that object. 
// But for class, the function is maintain inside prototype of the class rather
// than every copy of object.
// So 2nd one is more memory efficient approach.


// Implement this
// const result = calc.add(10).subtract(5).multiply(2).divide(4).getResult();
// console.log(result)

// class Calculator {
//     constructor(initialValue = 0) {
//         this.result = initialValue;
//     }

//     add(num) {
//         this.result += num;
//         return this;
//     }

//     subtract(num) {
//         this.result -= num;
//         return this
//     }

//     multiply(num) {
//         this.result *= num;
//         return this
//     }

//     divide(num) {
//         if (num !== 0) {
//             this.result /= num;
//         } else  {
//             console.log("can't divide by 0")
//         }

//         return this
//     }

//     getResult() {
//         return this.result;
//     }
// }

// const calc = new Calculator();
// const result = calc.add(10).subtract(5).multiply(2).divide(4).getResult();
// console.log(result)


// Question 7: Inheritance and Polymorphism
// Implement a `Shape` class with an `area()` method.
// Create subclasses `Circle` and `Square` that inherit from `Shape` and override
// the `area()` method to calculate their respective areas.

// class Shape {
//     area() {
//         return 0;
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     area() {
//         return Math.PI * this.radius ** 2;
//     }
// }

// class Square extends Shape {
//     constructor(side) {
//         super();
//         this.side = side;
//     }

//     area() {
//         return this.side ** 2;
//     }
// }

// const circle = new Circle(5);
// const square = new Square(4);

// console.log(circle.area())
// console.log(square.area())


// What are getters and setters in JS(JavaScript)?
class Teacher {
    constructor(name, channel) {
        this.name = name;
        this.channel = channel;
        this._videoLikes = 0;
    }

    intro() {
        return `Hey its ${this.name}! Welcome to ${this.channel}`
    }

    like() {
        this._videoLikes++;
        return `Liked this video! Current likes: ${this._videoLikes}`;
    }

    get videoLikes() {
        return this._videoLikes;
    }

    set videoLikes(likes) {
        if (likes < 0) throw new Error("Must be more than 0")
        else this._videoLikes = likes;
    }
}

const teacher = new Teacher("Sandip", "Youtube");
console.log(teacher.videoLikes)
teacher.videoLikes = 10;
console.log(teacher.videoLikes)
