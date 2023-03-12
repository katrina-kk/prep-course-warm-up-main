//TASK DONE
export {};
 function truncateString (text:string, length: number) : string {
   return text.substring(0,length);

  /*let result = ''
  for (let i = 0; i< lenght; i++){
    const char = text[i]
    result += char
  }
  return result */
 
 }

 console.log(truncateString("CODELEX", 4)); // Expected output: CODE

 
/* original
export {};

console.log(truncateString("CODELEX", 4)); // Expected output: CODE */
