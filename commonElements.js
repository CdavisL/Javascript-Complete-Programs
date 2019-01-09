    // Write a program that takes two Number Arrays as input, 
    // Then Compares both arrays against one another to 
    // find common values and places them into a New Array


commonNum();


function commonNum() {
    var arr1 = [10, 64, 3, 5, 108, 40, 42];
    var arr2 = [24, 38, 28, 64, 42, 1080, 720];

    console.log(arr2);
    console.log(arr1);

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
            var test = arr2[j];
            console.log("Common numbers in both arrays: " + test);
            }
        }
    }
}