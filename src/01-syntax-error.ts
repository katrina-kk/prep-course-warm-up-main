//TASK DONE
export {};

  function addNumbers(a:number, b: number, c:number): number {
    return a + b + c;
}

let result = addNumbers(1, 3, 4);
console.log(result); // Expected output: 8


//It would be a mistake to write types in JS. This is needed in TS
//If there is no return statmement then type would be void.

/*function addNumbers(a:number, b: number, c:number): void {
  console.log( a + b + c)
}

addNumbers(1,3,4); // Expected output: 8*/