// Write a program that takes a string
// and also takes a number ( n ) . It then returns 
// your string back to you n number of times. 

var numberOfTimes = 1;
var favoriteWord ;
var favoriteNumber;
var favWordTimes = [];
var ray = [];

function stringNumOfTimes() {
    favoriteWord = document.getElementById("favoriteWord").value;
    document.getElementById("favoriteWordValue").innerHTML = favoriteWord;
    favoriteNumber = document.getElementById("favoriteNumber").value;
    document.getElementById("favoriteNumberValue").innerHTML = favoriteNumber;
    
    if (favoriteNumber === null) {
        favoriteNumber = numberOfTimes;
    }else {
        favWordTimes = favoriteWord.repeat(favoriteNumber);
    }
    document.getElementById("favWordTimesValue").innerHTML = favWordTimes;
}

function makeAStringSandwhich() {
    stringNumOfTimes();
    console.log();
}