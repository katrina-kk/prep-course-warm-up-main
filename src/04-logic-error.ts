//TASK DONE
export {};

function trimWord(word: string) {
  return word.trim();
}

const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"*/



/* example

export {};

function trimWord(word: string) : string {
  let result = ''
  word.split('').forEach(char => result = char !== ' ' ? result + char : result)
  return result
}

const result = trimWord("  CODELEX ");
const result2 = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"

/* original

function trimWord(word) {
  return wordtrim();
}

const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"*/


