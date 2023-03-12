//TASK DONE

export {};

function onlyTheAces(array: string []) {
    //return arr.filter(it => it === 'Ace')
    //return arr.filter(it => it.startsWith('A'))
    const result :string[] = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element === 'Ace') {
            result.push(element);
        }
        
    }
    return result 
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']


/*original 
export {};

function onlyTheAces(arr) {}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace'] */