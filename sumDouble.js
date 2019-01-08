// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

    sumDbl(1,2);
    sumDbl(2,2);
    sumDbl(6,7);
    sumDbl(7,7);

//done in one
//in this method I simply combined the functions
//the very first if checks to see if the numbers are precisely equal and then doubles them if they are
//else, it simply adds them
function sumDbl(num1, num2) {
    if (num1 === num2) {
        console.log((num1 + num2) * 2);
    } else {
        console.log(num1 + num2);
    }
}