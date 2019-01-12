//this is a collection of a JS functions for future reference

//this writes/prints something to an html page
document.write("I love video games.");

//this activates an alert for the user
//have to click on ok before user can do anything
alert("Click OK to close this window.");

//this activates a prompt for user input
var something = prompt("Please enter something here.");
console.log(something);

//this activates a confirm window for the user
//can click ok, cancel, or elsewhere to close
confirm("Is it ok to pick up girls in a dungeon?");

//basic math functions
function add(num1, num2) {
    result = num1 + num2;
    console.log(result);
}

add(2, 3);

function sub(num1, num2) {
    result = num1 - num2;
    console.log(result);
}

sub(2, 3);

function multi(num1, num2) {
    result = num1 * num2;
    console.log(result);
}

multi(2, 3);

function div(num1, num2) {
    result = num1 / num2;
    console.log(result);
}

div(2, 3);

//modulus div for exact number
function modDiv(num1, num2) {
    result = num1 % num2;
    console.log(result);
}

modDiv(2, 3);

//mixed math functions
function sumDbl(num1, num2) {
    if (num1 === num2) {
        console.log((num1 + num2) * 2);
    } else {
        console.log(num1 + num2);
    }
}

sumDbl(2, 8);
sumDbl(4, 4);

function sumDiv(num1, num2) {
    if (num1 === num2) {
        console.log((num1 + num2) / 2);
    } else {
        console.log(num1 + num2);
    }
}

sumDiv(2, 8);
sumDiv(4, 4);

function sumDbl(num1, num2) {
    if (num1 === num2) {
        console.log((num1 + num2) * 2);
    } else {
        console.log(num1 + num2);
    }
}

sumDbl(2, 8);
sumDbl(4, 4);

function sumNeg(num1, num2) {
    if (num1 === num2) {
        console.log((num1 - num2) * -2);
    } else {
        console.log(num1 - num2);
    }
}

sumNeg(2, 8);
sumNeg(4, 4);