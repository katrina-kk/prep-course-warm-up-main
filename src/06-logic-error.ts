//TASK DONE
export {};

function trimWord(word:string) {
  return word.trim();
}

const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"

/*original
export {};

function trimWord(word) {
  return word.trim;
}

const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX" */