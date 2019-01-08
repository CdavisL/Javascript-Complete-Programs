// Given a string, return a version without the first and last char, so "Hello"
// yields "ell". The string length will be at least 2.
// withoutEnd("Hello") → "ell"
// withoutEnd("java") → "av"
// withoutEnd("coding") → "odin

var noEnd = "Noctis";
var noEnd2 = "Gladio";
var noEnd3 = "Prompto";
var noEnd4 = "Ignis";

//function to remove first and last character
//or name Even More Fantasy Name Generator!?
function noBeginOrEnd(word) {
    console.log(word.substring(1, word.length - 1));
}

noBeginOrEnd(noEnd);
noBeginOrEnd(noEnd2);
noBeginOrEnd(noEnd3);
noBeginOrEnd(noEnd4);