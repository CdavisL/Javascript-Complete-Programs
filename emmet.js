console.log("! creates a html skeleton.");

console.log("li>a creates a li with an a tag. You can then use * x to create as many as you want.");

console.log("div.container creates a div with a class named container. .container will do the same thing. You can do the same thing with any element like h1 or p. It also possible to use an id such as #container. You can add multiple classes, so: #container.block-1.block-2.block-3.");

console.log("To create a child element with emmet use the >. Ex: ul>li.");

console.log("ul>li creates an unordered list. Can use * x to create as many as you want.");

console.log("You can use {} to add text where you want. For instance: ul.style>li>a{CLICK}.");

console.log("To create a sibling element instead of a child, use + instead of >. Ex: h1{Noctis is the best protagonist!}+h5{Gladio is still my favorite though.}.");

console.log("All of these abilities can be combined with an * to replicate the code with classes or ids and text as desired.");

console.log("You can use emmet to expand. Ex: div.block+h1{Never fear, Prompto's here!}+p{'I never miss... A photo op.'}*3. You can also make the p different .blocks.");

console.log("When you use > this indicates that everything goes inside the major element before it. If you do not want this to happen use ^.");

console.log("This is climbing: .container>h1{Course}+p>lorem>a{Ignis though}^p{'That's it! I've come up with a new recipeh!'}. And this is grouping: .container>h1{Course}+(p>lorem>a{Ignis though})+p{'That's it! I've come up with a new recipeh!'}. Grouping is indicated by (). Both give the same result.");

console.log("To add different classes with replication, simply use class='thumbnail $'*x. This will replicate the code with class='thumbnail x'. You can also add an underscore, so _$. To further shorten this simple use .thumbnail$*x. Adding extra $ will resulting in a zero, so $$ will be 01 and $$$ will be 001. Adding an @number will start the count at that number. So $@5 will start the count at 5. You can also reverse the count using @5-.");

console.log("Adding attributes is easy. Use square brackets, then fill in the desired attributes such as src or heightxwidth.");

console.log("In CSS document, typing bg+ gives more options. Typing + in general will give more options.");

console.log("Gradient can be controlled by putting bottom right, top left before color selections.");

console.log("emmet css shortcuts: bg/background, bd/border, bdt/border-top, bgi/background images, bd:n/border none, p(x/%/em)/padding+pixels, bga/background-attachment, lg(color, color2)/gradient.");

console.log("Visit emmet cheat sheet for more information.");