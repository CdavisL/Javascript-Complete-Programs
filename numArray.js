//this function creates an array that list all numbers up to the call
//numarray(5) results in [1,2,3,4])
function numarray(n) {
    resultArr = [n];
    for (i = 0; i < n; i++) {
        resultArr[i] = i ;
    }
    console.log(resultArr);
}

numarray(10);
numarray(64);
numarray(40);