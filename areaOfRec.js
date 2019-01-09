// Write a Java program to print the area
// and perimeter of a rectangle by taking width and height
// of rectangle from the user.

// Area = height * width;
// perimeter = 2 * (height + width);
var height;
var width;
var tip = confirm("Set the Height and the Width before doing any thing!");
console.log(tip);

//this function goes the linked html and fetches these elements by id
function getHeightAndWidth() {
    height = document.getElementById("height").value;
    document.getElementById("heightvalue").innerHTML = height;
    document.getElementById("heightvalue2").innerHTML = height;
    width = document.getElementById("width").value;
    document.getElementById("widthvalue").innerHTML = width;
    document.getElementById("widthvalue2").innerHTML = width;
}

//this function takes those values and does the math to figure out area
function area(height, width) {
        var areaOfRectangle = height * width;
        document.getElementById("areaOfRectangle").innerHTML = areaOfRectangle;
        console.log(areaOfRectangle);
    }

//this function calculates the perimeter
function perimeter(height, width) {
        var perimeterOfRectangle = (2 * (Number(height) + Number(width)));
        document.getElementById("perimeterOfRectangle").innerHTML = perimeterOfRectangle;
        console.log(perimeterOfRectangle);
    }