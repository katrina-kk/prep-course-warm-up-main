//TASK DONE 

export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function(a: number, b: number) {
    return ((b - a) + 1) * (a + b) / 2
   
}

console.log(sumAll(1, 4)); // Expected output: 10



/* original

export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

//const sumAll = function() {};

//console.log(sumAll(1, 4)); // Expected output: 10
