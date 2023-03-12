//TASK DONE 

export {};
//Array<string>
function stringToArray(listOfPersons: string[] ): string[] {
 const name = listOfPersons[0];
 const result : string[] = [];
 /*for( let i = 0; i< listOfPersons.length; i++) {
const nameSurname = listOfPersons[i];
const arrayOfAllNames = nameSurname.split(' ')
result.push(arrayOfAllNames[0]);
result.push(arrayOfAllNames[1]);*/

listOfPersons.forEach((person) => {
    const arrayOfAllNames = person.split(" ");
    arrayOfAllNames.forEach(name =>{
        result.push(name)
    } )

 });



 return result;
}
console.log(stringToArray(["John Doe", "Katrina Kraukle"])); // Expected output: ['John', 'Doe'] 
//console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe'] 

const users = {
    jdjsjdsjjsdjsd: {
        name: "Janis",
        secondName: "Pulkvedis",
        surname: "Berzins", 
    },

};

function getUpperCasedNamed(names: string[]):string []{

    //const res: string []  = [];
   // names.forEach((name) => {
    //    res.push(name.toUpperCase());
   // });
   // return res;
    return names.map ((name) => {
        return name.toUpperCase()
    });
}

/* example 
export {};
//Array<string>
function stringToArray(listOfPersons: string[] ): string[] {
 const name = listOfPersons[0];
 console.log(name);

 return name.split (' ')
}
console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe'] 

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */

/* original 
console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']  */
