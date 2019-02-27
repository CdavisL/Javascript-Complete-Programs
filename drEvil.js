//create a function called Dr. Evil
//it should take a single argument, an amount, and return '(amount) dollars'
//add pinky if amount is 1,000,000
var money = prompt("Pick a number.");

function drEvil(money) {

    result = money * 10;

    if (result !== 1000000) {
        console.log("The amount is " + result + " dollars!")
        confirm("The amount is " + result + " dollars!");
    }

    else {
        console.log("The amount is " + result + " dollars!" + "(pinky)");
        confirm("The amount is " + result + " dollars!" + "(pinky)");
    }
}

drEvil(money);