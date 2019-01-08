//these come from my notes outside class for query selectors
//these function replace the text in the html using JS

console.log("Query selector shows off why JS is a popular and good programming language, so don't mess this lesson up. Query selectors deal with how do we get info and how do we add info.");

console.log("Query requires either a class, an ID, or element.");

console.log("Queries selector is a method that is part of the page document.");

main = document.querySelector("#main");
console.log(main);

main.innerHTML += " <p>'Long live King Regis! Long live Ser Clarus!'</p>"
console.log(main.innerHTML);

console.log("OMG it changed! That was cool. Ahem, QS changed the text in the HTML doc it connected to. If you want to add more, you can use a logical operator. You can add HTML tags as well!");

content = main.innerHTML
console.log(content);
main.innerHTML += "<p>I think Clarus and Gladio are related to Gilgamesh.</p>"
console.log(main.innerHTML);

main.innerHTML = "<p><h1>'And now we FIGHT!'</h1></p>"
console.log(content);
console.log(main.innerHTML);
content.toUpperCase().replace("<p><h1>'Now fly, Enkidu! I said FLY!!!'</p></h1>")
console.log(content.toUpperCase().replace());

console.log("Using query selector is easy, but be careful. Its easy to overwrite the original var just like with an assignment operator.");