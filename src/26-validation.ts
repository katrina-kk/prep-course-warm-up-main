//TASK DONE
export {};

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

const excludedNums = [6, 14, 91, 111];

// You are allowed to edit only this function
function validate(num: number | string): boolean {
  if (typeof num === "number" && Number.isInteger(num) && excludedNums.every((currentValue) => currentValue != num)) {
    return true;
  };                                      //the typeof operator returns a string indicating the type of the operand's value.
  return false;                             //The every() method executes a function for each array element. The every() method returns true if the function returns true for all elements. 
};      

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/



/*original 
export {};

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 

const excludedNums = [6, 14, 91, 111];

// You are allowed to edit only this function
function validate(num) {}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/       