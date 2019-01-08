// Write a Program that Grades Students Class Work

function gradeStudents(n) {
    if (n >= 50 && n < 60) {
        console.log("You earned an " + n + ". Nobody wants an 'F.'");
    }
    else if (n >= 60 && n < 70) {
        console.log("You earned an " + n + ". Slightly better than an 'F.'");
    }
    else if (n >= 70 && n < 80) {
        console.log("You earned an " + n + ". Half way there.");
    }
    else if (n >= 80 && n < 90) {
        console.log("You earned an " + n + ". Just a little more!");
    }
    else if (n >= 90) {
        console.log("You earned an " + n + ". Nice work! Congrats!");
    }
    else { console.log("Really? No one expects a 5.0, but with " + n + ", you ain't going nowhere fast.")}
}

    gradeStudents(88);
    gradeStudents(96);
    gradeStudents(15);