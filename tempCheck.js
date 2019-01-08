// Given two temperatures, return true if one is less than 0 and the other is
	// greater than 100.
	// icyHot(120, -1) → true
	// icyHot(-1, 120) → true
	// icyHot(2, 120) → false

    //this function returns true if one parameter is less than 0 and the other greater than 100.
    function icyHot(temp1, temp2) {
        var result = temp1 < 0 && temp2 > 100 || temp1 > 100 && temp2 < 0 ? "true" : "false";
        console.log(result);
    }

    var temp1 = -1;
    var temp2 = 110;
    var temp3 = -23;
    var temp4 = 88;

    var isIcyHot = icyHot(temp1,temp4);
    var isIcyHot2 = icyHot(temp3, temp2);
    var isIcyHot3 = icyHot(temp1,temp3);
    var isIcyHot4 = icyHot(temp1,temp2);