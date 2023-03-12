//TASK DONE
export {};

/**
 * Write function first5 which returns first five elements from the array
 */
function first5(arr: number[]) {
    return arr.slice(0, 5);           //The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; // You are NOT allowed to edit this line
const first5Numbers = first5(numbers); // You are NOT allowed to edit this line

console.log(first5Numbers); // Expected result: [1, 2, 3, 4, 5]


/* original

export {};

/**
 * Write function first5 which returns first five elements from the array
 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; // You are NOT allowed to edit this line
const first5Numbers = first5(numbers); // You are NOT allowed to edit this line

console.log(first5Numbers); // Expected result: [1, 2, 3, 4, 5] */