//Given a string, return true if it ends in "ly".
//endsLy("oddly") → true
//endsLy("y") → false
//endsLy("oddy") → false


endsWLY("Oddly");
endsWLY("Thoughtfully");
endsWLY("Sadly");
endsWLY("Lyons");

function endsWLY(string) {
    if (string.length < 2) {
        console.log("false");
    } else if (string.substring(string.length - 2 ).match("ly")) {
        console.log("true");
    } else {
        console.log("false");
    }
}