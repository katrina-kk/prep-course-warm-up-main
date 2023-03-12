//TASK DONE
export {};

interface libraryObj {         //Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow.
  [i: number]: {
    title: string,
    author: string,
    isRead: boolean
  };
}
const library: libraryObj = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (obj: libraryObj) => {
  for (let i = 0; i < Object.keys(obj).length; i++) {     //The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
    if (obj[i].isRead == true) {
      console.log(`Already read '${obj[i].title}' by ${obj[i].author}.`)
    } else {
      console.log(`You still need to read '${obj[i].title}' by ${obj[i].author}.`)
    }
  }
}

showStatus(library);
/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/



/*original
export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = () => {};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/  