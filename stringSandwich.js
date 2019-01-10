// Given an "out" string length 4, such as "<<>>", and a word, return a new
// string where the word is in the middle of the out string, e.g. "<<word>>".
// Note: use str.substring(i, j) to extract the String starting at index i and
// going up to but not including index j.
// makeOutWord("<<>>", "Yay") → "<<Yay>>"
// makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"
// makeOutWord("[[]]", "word") → "[[word]]"


var bread;
var filling;
var strSandwich;

function getIngredients() {
    bread = document.getElementById("bread").value;
    document.getElementById("breadType").innerHTML = bread;
    filling = document.getElementById("filling").value;
    document.getElementById("fillingType").innerHTML = filling;
    strSandwich = bread.substring(0,2) + filling + bread.substring(2);
    document.getElementById("strSandwichValue").innerHTML = strSandwich;
}

function makeAStringSandwich(bread, filling) {
    getIngredients();
    
    console.log(strSandwich);
}