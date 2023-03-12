//TASK DONE 

export {};

// object is the type of all non-primitive values (primitive values are undefined , null , booleans, numbers, bigints, strings). With this type, we can't access any properties of a value.
/**
 * Create a function protectEmail which hides some symbols of the email
 */

const protectEmail = (email: string) => {                  //.split to split email into to two string array at "@" and then use the length of the first string (at index 0) to know where to insert the second .substring
    let beforeAt = (email.split("@"))[0] 
    let hide = "..."
    return email.substring(0, 3) + hide + email.substring(beforeAt.length) 
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com

/*orginal

export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com   */