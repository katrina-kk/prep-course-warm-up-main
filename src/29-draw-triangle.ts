//TASK DONE 
export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(num: number) {
    let star = "*"
    for (let i = 1; i < num + 1; i++) {
        console.log(star.repeat(i));               // The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called,
    }
};


draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/


/*original
export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

//function draw() {}

//draw(3);
/* Expected output:
    *
    **
    ***
*/

//draw(5);
/* Expected output:
    *
    **
    ***
    ****
    *****
*/