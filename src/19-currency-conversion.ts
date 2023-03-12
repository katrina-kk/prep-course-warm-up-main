//TASK DONE

export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

 const RATE_GBP_USD = 1.19

function calculatePriceWithFee( price: number){
    return price * 1.02
}

/*function formatPrice (price: number): string {
    return price.toFixed(2)
} */

// You are allowed to change this function
/*function convertCurrency(price: number, rate : number) {
    const priceConverted = price * rate
    const priceWithFee = calculatePriceWithFee(priceConverted)
    return formatPrice(priceWithFee) } */
    function convertToUSD(price: number) {
        return calculatePriceWithFee(1.4 * price).toFixed(2);
    }

// You are allowed to change this function
function convertToBRL(price:number) {
    const priceInBRL = price * 6.4
    const fee = price *1.01
    return (priceInBRL + fee).toFixed(2)
} 

const product = "You don't know JS";
const price = 12.5;
//const priceInUSD = convertCurrency(price, RATE_GBP_USD);
//const priceInBRL = convertCurrency(price2);

const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price); 

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
 /*original
export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 

// You are allowed to change this function
function convertToUSD(price) {}
// You are allowed to change this function
function convertToBRL(price) {}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
