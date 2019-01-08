// Given a string, return the string made of its first two chars, so the String
// "Hello" yields "He". If the string is shorter than length 2, return whatever
// there is, so "X" yields "X", and the empty string "" yields the empty string
// "". Note that str.length() returns the length of a string.
// firstTwo("Hello") → "He"
// firstTwo("abcdefg") → "ab"
// firstTwo("ab") → "ab"

var str1 = "Todd"
var str2 = "Howard"
var str3 = "Bethesda"

function first2(string) {

    if (string.length < 2) {
        console.log(string);
    }
    else {
        console.log(string.substring(0, 2));
    }
}

first2(str1)
first2(str2)
first2(str3)

