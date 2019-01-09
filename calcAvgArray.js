// Write a JavaScript program
// that sums all elements in array
// once you have the sum FIND
// the average of the sum.


var numbers = [4, 8, 16, 32, 64];
//this methods find the sum of the array and the average
var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];

    var average = sum / numbers.length;
    console.log("Average value of the array elements is : " + average);
}