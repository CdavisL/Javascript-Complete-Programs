// We have a loud talking parrot. The "hour" parameter is the current hour time
// in the range 0..23. We are in trouble if the parrot is talking and the hour
// is before 7 or after 20. Return true if we are in trouble.
// parrotTrouble(true, 6) → true
// parrotTrouble(true, 7) → false
// parrotTrouble(false, 6) → false
    
    var isTalking = false;
    var whatTime = 12; 

//this function determines whether the parrot is talking at the wrong hours or not
    function parrotTalk(isParrotTalk, time) {
        if (isParrotTalk === true && time > 7) {
            console.log(true, `We ok!`);
        }
        else if (isParrotTalk === false && time < 7 || time > 20) {
            console.log(false, `There will be "cornish hen" for dinner...`);
        }
    }

    parrotTalk(isTalking, whatTime);
    parrotTalk(true, 12);
    parrotTalk(false, 6);