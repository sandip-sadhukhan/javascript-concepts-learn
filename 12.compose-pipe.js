// Compose and Pipe
const addFive = (num) => {
    return num + 5;
}

const subtractTwo = (num) => {
    return num - 2;
}

const multiplyFour = (num) => {
    return num * 4;
}

// Implement compose function such that it take initial value and run all
// the function and input of the function will be output of the previous function
// const evaluate = compose(addFive, subtractTwo, multiplyFour);
// console.log(evaluate(5));
// Here initial value is 5, it will run last function first, so multiplyFour(5)
// will be 20, then subtractTwo(20) = 18, then addFive(18) = 23.
// pipe is same as compose just the order is different ie. in pipe function
// will be executed from left to right.


const compose = (...fns) => {
    return function(initialValue) {
        // One approach
        // let result = initialValue;
        // while(fns.length) {
        //     let func = fns.pop();
        //     result = func(result);
        // }
        // return result

        // Second approach
        return fns.reduceRight((acc, curr) => {
            return curr(acc);
        }, initialValue)

    }
}

// const evaluate = compose(addFive, subtractTwo, multiplyFour);
// console.log(evaluate(5));

const pipe = (...args) => {
    return function(initialValue) {
        // First approach
        // while(args.length) {
        //     let func = args.shift();
        //     initialValue = func(initialValue);
        // }
        // return initialValue

        // Second approach
        return args.reduce((acc, curr) => curr(acc), initialValue)
    }
}

const evaluate = pipe(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5));