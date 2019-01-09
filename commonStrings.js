    // Write a program that takes two Number Arrays as input, 
    // Then Compares both arrays against one another to 
    // find common values and places them into a New Array

//this function takes these two arrays and compares them to see if there are any matches
//checks only for the very first match and then stops
//modified this code from another to get it print out all common elements
function common() {
    var arr1 = ["sylva", "ardyn", "cid", "luna", "regis", "ravus", "gentiana", "noctis"];
    var arr2 = ["cindy", "claudia", "gladio", "regis", "talcott", "coctura", "luna"];

    console.log(arr1, arr2);

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
            var test = arr2[j];
            console.log("Common names in both arrays: " + test);
            }
        }
    }
}

common();