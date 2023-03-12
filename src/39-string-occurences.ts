//TASK DONE

export {};

const count = (str: string, word: string) => {
    let lowerCase = str.toLowerCase()
    return (lowerCase.match(new RegExp(word, "g")) || []).length               //The match() method retrieves the result of matching a string against a regular expression.
};                                                                             //The "g" modifier specifies a global match.A global match finds all matches (compared to only the first).



console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
  


/*original 

export {};

const count = () => {};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1   */