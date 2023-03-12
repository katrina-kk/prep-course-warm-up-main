//TASK DONE
export {};


function getNumber() :number {
  return Math.round(Math.random() * 10);
}

const result = getNumber(); // call the function created above and put the result inside the variable
console.log(result); // Expected output: {random number}


//The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range.
/* original 
export {};

function getNumber() {
  return Math.random() * 10;
}

const result = null; // call the function created above and put the result inside the variable
console.log(result); // Expected output: {random number}*/