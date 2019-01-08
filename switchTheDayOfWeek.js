// Write a program that takes a number as 
// input and returns the day of week 
// corresponding with that number

function whatDayIsIt(day) {
switch (day) {
    case 1:
        console.log("Nobody likes Monday.");
        break;
    case 2:
        console.log("Tuesday, joy!");
        break;
    case 3:
        console.log("Wednesday! Also my favorite character from the Addams Family.");
        break;
    case 4:
        console.log("Thursday, baby!");
        break;
    case 5:
        console.log("The most important day of the week is Friday!");
        break;
    case 6:
        console.log("Saturday is my favorite day of the week!");
        break;
    case 7:
        console.log("Sunday... What happened to the rest of the week???");
        break;
    default:
        console.log("Whoa! There's only seven days in the week.");
        break;
    }
}

var dayOfTheWeek1 = 2;
var dayOfTheWeek2 = 5;
var dayOfTheWeek3 = 7;

whatDayIsIt(dayOfTheWeek1);
whatDayIsIt(dayOfTheWeek2);
whatDayIsIt(dayOfTheWeek3);