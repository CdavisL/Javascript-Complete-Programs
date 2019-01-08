//animal object
catObj = {"name" : "Lancelot", "type" : "house cat/indoor", "fur" : "mostly white with black and grey stripes", "tail" : "long and a little bit bushy", "eye color" : "green pupils with amber sclera", "character" : "nice, but easily irked", "condition" : "good health", "likes" : "sleeping, eating, and playing"}

console.log(catObj);

//All Animal Methods
var isFull = false;
var isAwake = true;

//True/false cannot be capitalized unless you make it a string.

function sleep(time) {
    isAwake = false;
    var howLong = time;
    for (var i = 0; i < howLong; i++) {
    console.log("I'm sleeping for " + howLong + " hours. Don't WAKE me!");
    }
    console.log("Finally got some rest. I'm woke.");
    console.log(isAwake);
}

function eat(amount) {
    var amountToEat = amount;
    if (amountToEat > 0) {
        ifFull = true;
    }
    console.log("My food! Don't touch! I'm eating " + amountToEat + " lbs of food." + " Are you full? " + isFull);
}

function jump (howHigh, howLong) {
    console.log("You're jumping " + howHigh + " ft high for " + howLong + " mins.");
    }

function herb() {
    console.log("I'm hungry, where's the greens?");
}

// o = omni c = carni h = herbi
function hunt (type) {
    var ftype = type.toLowerCase();
    switch(ftype) {
        case "o":
        //console.log("You eat both meat and plants.");
        console.log("You eat both meat and plants.");
        break;

        case "c":
        //console.log("You eat meat only.");
        console.log("You eat meat only.");
        break;

        case "h":
        //console.log("You eat plants and don't have to eat right now.");
        herb();
        break;

        default: 
        //console.log("Hunting season is over! It was Rabbit Season though.");
        console.log("Hunting season is over! It was Rabbit Season though.");
    }
    console.log();
}

function run (speed) {
    if (speed === 1) {
    console.log("I'm running.");
    } else if(speed >= 2) {
        console.log("I'm getting the heck out of here.");
    } else
        console.log("I'm not going anywhere.");
}

function mate (offspring) {
    var offspring = offspring.toLowerCase();
    switch(offspring) {
        case "mm":
        console.log("They meet for a romantic rendezvous but produced no offspring.");
        break;

        case "mf":
        console.log("They meet for a romantic rendezvous and successfully produced offspring.");
    
        break;

        case "ff":
        console.log("They meet for a romantic rendezvous but produced no offspring.");
        break;

        case "mmf":
        console.log("A fight between the males broke out, the female left.");
        break;

        case "ffm":
        console.log("The male successful mated with both females.");
        break;

        case "m":
        console.log("The male found himself alone.");
        break;

        case "f":
        console.log("The female found herself alone.");
        break;

        default: console.log("No one came.");
    }
}

//Just for pun
//Pungeon Master strikes
var mon = "Pikachu!"
var fail = "nothing..."
var common = "Caterpie!"

function encounter (tame) {
    prompt("Enter a number between 1 and 10!");
    if (tame <= 3) {
        console.log("I caught a " + common);
    }
    else if (tame >= 7) {
        console.log("I caught a " + mon);
    } else {
        console.log("I got nothing.");
    }
}

function domesticate (wild) {
    var wild = wild.toLowerCase();
    switch(wild) {

        case "lion":
        console.log("Danger! This animal is aggressive.");
        break;

        case "cow":
        console.log("This one is definitely domesticated.");
        break;

        case "fox":
        console.log("Mostly harmless.");
        break;

        case "cat":
        console.log("FLEE! FLEE FOR YOUR LIVES!");
        break;

        default:
        console.log("Seriously though, even domesticated animals can be dangerous. Handle animals with caution or call animal control.");
    }
}

//Calling All Methods
sleep(5);
eat(2);
jump(2, 3);
hunt("o");
hunt("c");
hunt("h");
hunt("a");
run(1);
run(5);
run(-1);
mate("mmf");
mate("ff");
mate("m");
mate("a");
encounter(5);
encounter(1);
encounter(7);
domesticate("lion");
domesticate("cat");