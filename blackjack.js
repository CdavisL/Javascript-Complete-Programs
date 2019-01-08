/*
Given 2 int values greater than 0, 
return whichever value is nearest to 21 without going over.
Return 0 if they both go over.
blackjack(19, 21) → 21
blackjack(21, 19) → 21
blackjack(19, 22) → 19
*/

/* 
Initialize variable using VAR , 
set the name's to Hand1 & Hand2 , 
Set hand 'value' to value of two cards given by Dealer
*/
var hand1 = 19
var hand2 = 21


    /*  
        Setup the Function that takes two hands
        and returns 0 if both cards are over 21,
        if not return highest card.
    */ 
function blackjack(hand1, hand2) {
    if (hand1 > 21 && hand2 > 21) {
        console.log("Both hands lose!");
    }
    else if (hand1 < 21 && hand2 > 21) {
        console.log("Hand 1 wins!");
    }
    else if (hand2 < 21 && hand1 > 21) {
        console.log("Hand 2 wins!");
    }
    else if (hand1 === 21 && hand2 !== 21) {
        console.log("Hand 1 has BLACK JACK");
    }
    else if (hand2 === 21 && hand1 !== 21) {
        console.log("Hand 2 has BLACK JACK");
    }
    //biggest hand wins
    else { console.log(Math.max(hand1,hand2), `Highest hand wins!`);
    }
}


// Use Console Log to display output 
console.log("Black Jack!");
console.log(blackjack(hand1, hand2));