// Given a string of even length, return the first half. So the string "WooHoo"
// yields "Woo".
// firstHalf("WooHoo") → "Woo"
// firstHalf("HelloThere") → "Hello"
// firstHalf("abcdef") → "abc

//declaration
//these are people in the video game industry I admire
var name1 = "Todd";
var name2 = "Hironobu";
var name3 = "Tetsuya";
var name4 = "Hideo";

//this sets up the the function to split the string
function firstHalf(string) {
    var string = string.substring(0, string.length / 2)
    console.log(string)
}

//call
firstHalf(name1);
firstHalf(name2);
firstHalf(name3);
firstHalf(name4);