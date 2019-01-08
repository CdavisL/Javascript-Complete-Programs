
//Given 2 strings, return their concatenation, except omit the first char of each. 
//The strings will be at least length 1.
//nonStart("Hello", "There") → "ellohere"
//nonStart("java", "code") → "avaode"
//nonStart("shotl", "java") → "hotlava

//to add space, go between quotes and space bar
//looks cooler together though
omitsFirst("Noctis", "Caelum");
omitsFirst("Gladio", "Amicitia");
omitsFirst("Ignis", "Scientia");
omitsFirst("Prompto", "Argentum");

//this function takes off the first character
//similar to first and last character removal seen later on
//Beyond Fantasy Name Generator!
function omitsFirst(string1,string2) {
    string3 = string1.substring(1) + string2.substring(1);
    console.log(string3);
}