import { idText } from "typescript";

//TASK DONE 
export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */



function isBlank (text: string | null | undefined) {
    //return text === null || text === undefined ||  text?.trim() === ""; 

    if(text === null || text === undefined){
        return true;
    }
    if (text.trim() === ''){
        return true;
    }
    return false

    //option:
    //return !text || text.trim() ==='' 
    // ? checks is its truthy 
}



    

console.log(isBlank(null));
console.log(isBlank(undefined)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false

/* Original 

export {};


 //Create a function called isBlank, which checks if passed string is blank or not
 

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false  */