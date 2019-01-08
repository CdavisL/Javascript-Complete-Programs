/* Write A JavaScript Program That 
Checks Whether A Number Is Even Or Odd
 */


// passes into the function
evenOdd(10);
evenOdd(5);
evenOdd(9);
evenOdd(11);
evenOdd(222);
evenOdd(4);

//this function uses the modulus operator to determine if this number is even
function evenOdd (num) {
    if (num % 2 === 0) {
        console.log(num + " is even!");
    } else {
        console.log(num + " is odd!");
    }
}
