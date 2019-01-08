//these var list arrays

var numList1 = [10,13, 28, 64];
var numList2 = [100, 128, 42, 13, 58, 76];

//this function goes through the array checking for thirteen using a for loop 
//it then adds for every number until it hits 13
function checkForThirteen(numlist) {
    var total = 0;
    for (index = 0 ; 0 < numlist.length;index++) {
    if (numlist[index] !== 13) {
        total = total + numlist[index];
    }else {
        break;
    }

}
console.log(total);
}

//this calls the function checking for 13
checkForThirteen(numList1);
checkForThirteen(numList2);