//TASK DONE
export {};

//check out arrow functions

const repeatString = (char:string, length: number): string => {
    return char.repeat(length);

   /*variant:
    let result = ''
    for(let i = 0; i< length; i++){
        result = result + char
    }
    return result; */
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'

/*original 

export {};

const repeatString = () => {};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb' */
