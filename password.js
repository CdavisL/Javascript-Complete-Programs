// Wrire a Program That takes User Input Of A Number
// And Generates Them A Password Based off That Set #
// Also Allow User To Input Thier own String of Chars
// So The Program Uses That Set To Create Passwowrd

var keylist="abcdefghijklmnopqrstuvwxyz123456789"
var temp=''

function generatepass(plength){
temp=''
for (i=0;i<plength;i++)
temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
return temp
}

function populateform(enterlength){
document.pgenerate.output.value=generatepass(enterlength)
}

function setkeylist(){
    if (document.getElementById("userkey").value === ""){
        alert("Key List Cannot Be 'Null'" + "\n" + " Enter a set of chars i.e - 'abcdef' ")
    }else {
        keylist = document.getElementById("userkey").value;
    }
    }

    function resetkeylist(){
        keylist = "abcdefghijklmnopqrstuvwxyz123456789"
        }
    
