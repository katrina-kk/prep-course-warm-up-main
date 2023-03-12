
//TASK DONE 
export {};

function tidyUpString(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string): string {
  return  str[0].toUpperCase() +  str.slice(1)
}




const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
//let mentorsTidy = mentors.map((mentor) => capitalise(tidyUpString(mentor)));

//Map() nokopē masīvu un jaunās vērtības ir pārmainītas vecās. atgriež masīvu ar tikpat daudz elementiem.
// You are allowed to edit this line
const mentorsTidy: string[] = mentors.map((mentor) => {
  return (capitalise(tidyUpString(mentor)))
}
);

/*otrs variants
let mentorsTidy: string[] = [];

mentors.forEach((mentor) => {
  const tidyMentor =  tidyUpString(mentor)
  mentorsTidy.push(capitalise(tidyMentor))
})
*/

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]

/* original 
export {};

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str) {}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy; // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]  */
