//TASK DONE

export {};

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */


type MyType = (string | number) []
// You are allowed to edit only this function
function remove(arr: MyType, valueToRemove: string | number): MyType {
//typeof
const index = arr.indexOf(valueToRemove);
const arrCopy = [...arr]   //copy of array 
if(index !== -1){
  arrCopy.splice(index,1);
}
console.log(arr);

return arrCopy
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/


/* original 

export {};

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 

// You are allowed to edit only this function
function remove(arr, valueToRemove) {}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/

