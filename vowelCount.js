    // Write a JavaScript program that takes a String
	// Converts the string to all lowercase letters
    // Then checks the String for vowel's.
    // If there are any , Keep Track By Using a Vowel Counter. 


    var str1 = "'Walk tall my friends.' - Noctis";
    var str2 = "'Live gloriously.' - Morrigan";
    var str3 = "'Those dreams that have faded, never forget them.' -Yuna";
    var res1 = str1.toLowerCase();
    var res2 = str2.toLowerCase();
    var res3 = str3.toLowerCase();

    vowelCounting(res1);
    vowelCounting(res2);
    vowelCounting(res3);

function vowelCounting(String) {
    var vowelCount = 0;
    for (var i = 0; i < String.length; i++) {
        if (String.charAt(i) == 'a'
            || String.charAt(i) == 'e'
            || String.charAt(i) == 'i'
            || String.charAt(i) == 'o'
            || String.charAt(i) == 'u') {
            vowelCount++;
        }
    }
    
    console.log(vowelCount)
}
