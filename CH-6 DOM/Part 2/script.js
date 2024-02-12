// DOM Manipulation :-

// Attributes  :-

// (i) getAttribute(attr)  :- to get the attribute value

// for example :-

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));


// (ii) setAttribute(attr,value)  :-  to set the attribute value

// for example :-

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "new class"));


// Style :- to style our node

// let div = document.querySelector("div");
// console.log(div.style);

// div.style.backgroundColor = "lightgreen";
// div.style.visibility = "hidden";
// div.style.fontSize = "25px";
// div.innerText = "Hello!";


// (1) Insert Element :-  let El document.createElement("div") // to add the items inside or outside the element

// for example :-(i) if we have to add button 

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

// (i)   node.append(el) :- // adds at the end of elements (inside)

// for example :-

// let div = document.querySelector("div");
// div.append(newBtn);

// (ii)  node.prepend(el)  :- // adds at the start of elements(inside)

// for example :-

// let div = document.querySelector("div");
// div.prepend(newBtn);

// (iii)  node.before(el) :- // adds before the elements(outside)

// for example :-

// let div = document.querySelector("div");
// div.before(newBtn);

// (iv) node.after(el) :- // adds after the elements(outside)

// for example :-

// let div = document.querySelector("div");
// div.after(newBtn);

// for example :-(ii) if we have add heading

let newHeading = document.createElement("h1");
let newHeading2 = document.createElement("h1");
newHeading.innerText = "|| Jai Shri Ram🏹 ||";
newHeading2.innerText = "||Har Har Mahadev 🔱🕉️||";
console.log(newHeading);
console.log(newHeading2);

let div = document.querySelector("div");
div.before(newHeading);

let p = document.querySelector("p");
p.after(newHeading2);


// (2) Delete/Remove Element :- node.remove() // if we want to delete the element without using html 

let para = document.querySelector("p");
para.remove();

// newHeading2.remove(); // to delete the newHeading2
div.remove() // to delete the complete div


// classList :- to add or remove the class without usig html we use a classList attribute.

// (i) node.classList.add(""); //to add the new class in the element

// (i) node.classList.remove(""); //to remove the class in the element