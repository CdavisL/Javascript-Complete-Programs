// Create Multiplication Table that takes 
// user input for a number and gives them a 
// multiplication table for that number up 
// to at least 10 Numbers.


/* 
var x = document.createElement("INPUT");
x.setAttribute("type", "number"); 
*/




function calculate() {
    
    var x = Number(document.getElementById("usernum1").value);
    var z = [];
    
    for (multiple = 0;multiple <= 10;multiple++) {

        var x = document.getElementById("usernum1").value;
        
         z[multiple] = x * multiple ;

        document.getElementById("demo").innerHTML = z;
        console.table(z)
    }


}