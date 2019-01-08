// Given 2 int values, return true if one is negative and one is positive.
// Except if the parameter "negative" is true, then return true only if both are
// negative.
// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

/*function posNeg( number1,number2 , isNegative) {
    if (isNegative) {
        console.log(number1 < 0 && number2 < 0 );
        console.log("Both these numbers are negative.");
    }
    else {
        console.log(( number1 <= 0 && number2 >= 0) || (number1 >= 0 && number2 <= 0));
    }
}*/

//these are the same (or similar) functions
//the first one is written by teacher, the second I wrote independently
//if I read the problem right, the function is only looking for a set of negatives to return true and anything else false
function posNeg (numberOne, numberTwo, isNegative) {
    if (numberOne < 0 && numberTwo <  0) {
        console.log("Statement is true");
    }
    else { 
        (numberOne < 0 && numberTwo > 0) || (numberOne > 0 && numberTwo < 0)
        console.log("Statement is false");
    }
}

posNeg(-1, -1, true);
posNeg(-1, 2, false);
posNeg(5, 8, true);