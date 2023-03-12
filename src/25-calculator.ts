//TASK DONE 

export {};

function add(a: number, b: number) {
    return a + b;
}

function subtract(a: number, b: number) {
    return a - b;
}

function sum(arr: number[]) {
    return arr.reduce((a: number, b: number) => a + b);  //The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order
}

function multiply(arr: number[]) {
    return arr.reduce((a: number, b: number) => a * b);
}

function power(a: number, b: number) {
    return (Math.pow(a, b));                    //he Math.pow() static method returns the value of a base raised to a power. 
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8

/* original 


export {};

function add() {}

function subtract() {}

function sum() {}

function multiply() {}

function power() {}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8    */
