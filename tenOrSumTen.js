// Given 2 ints, a and b, return true if one if them is 10 or if their sum is
	// 10.
	// makes10(9, 10) → true
	// makes10(9, 9) → false
    // makes10(1, 9) → true

    var nextNum1 = 5;
    var nextNum2 = 6;
    var nextNum3 = 4;
    var nextNum4 = 9;
    var nextNum5 = 10;

    //these `` (back tick) adds a line break between the string and the true/false
    //although technically the true/false has become apart of the string
    function checkIfTenOrSum(num1, num2) {

        if (num1 === 10 || num2 === 10 || num1 + num2 === 10) {
            console.log(`These numbers either add up to 10 or one of them is 10. 
            true`);
        }else {
            console.log(`These numbers do not add up to 10. 
            false`);
        }

    }

    checkIfTenOrSum(nextNum1, nextNum1);
    checkIfTenOrSum(nextNum2, nextNum3);
    checkIfTenOrSum(nextNum5, nextNum1);
    checkIfTenOrSum(nextNum4, nextNum2);
    checkIfTenOrSum(nextNum5, nextNum5);