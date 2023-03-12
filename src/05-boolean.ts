//TASK DONE
export {};

const isHappy: boolean = true;

if (isHappy) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}


//all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.
/// === - third = checks data type 
/* original

const isHappy = "true";

if (isHappy == false) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}*/
// Expected output: "I am happy"
