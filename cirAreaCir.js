// Write a program that takes radius from the user
// and calculates the circumference and area

// Hint:
// Area = Math.PI * r * r
// circumference = 2 * Math.PI * r

//declare var
var radius = 6;

//method to find radius
function calCircumference(radius) {

	//return 2 * Math.PI * radius;
	console.log(2 * Math.PI * radius);
        
}

//method to find area
function calArea(radius) {

	//return radius * radius * Math.PI;
	console.log(radius * radius * Math.PI);
        
}

console.log(calCircumference(radius));
console.log(calArea(radius));