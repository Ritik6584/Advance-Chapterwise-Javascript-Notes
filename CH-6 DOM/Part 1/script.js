/* Starter Code :-

<style> tag connects HTML with CSS

<script> tag connects HTML with JS

    <html>
        <head>
            <title>
                Website Name
            </title>
        </head>
        <body>
            <!--content tags-->
        </body>
    </html>


WINDOW OBJECTS :- The wndow objects represents an open window in a browser. It is browser's objects (not JavaScripts) & is automatocally created by browser.

        It is a global objects with lots of properties and methods.

DOM :- When a web page is loaded the document creates a document object model(DOM) of the page.
       or
It is way to access the HTML in javascripts in a document inside the window.

console.log()  :- It prints an object as an element on the screen.

console.dir()  :- It prints the special type of objects like document's properties and method. 

Why we write script tag inside the body tag?

Ans:- Bcz if we write the script tag outside the body tag then  we get a null value and DOM objects dosn't accessible in the code |


DOM Manipulation :- Accessing the elements or objects with different approach.

(i)   Selecting With Id :- 

    for example :-

    If we want to access a individual element then we have to give a id to the element if we give id="myId"
     
    * All element has unique ID *

    then we can access by :- document.getElementById("myId")

(ii)  Selecting With Class :-

   we can also access by giving the class to the elements, class="myClass"

   * If we want to access two or more elements then we can access by giving the common class to these elements *

    then we can access by :- document.getElementByClassNmae("myClass")

(iii)  Selecting With Tag :-
   
   We can also access the element by their tag.

   * If we want to access the all the element inside the any tag then we can  access the tag directly ,

    for ex:-
     <div>
        <h1>Heading</h1>
        <p>My name is Ritik</P>
        <p>I want to become a  millionaire</P>
        <p></P>
     </div>

     we can access all the elements by accesssing the div tag.*/



     let heading = document.getElementById("heading"); // by id
     console.dir(heading);

     let myClass = document.getElementsByClassName("one");  // by class
     console.dir(myClass);
     console.log(myClass);

     let givenTag = document.getElementsByTagName("h2"); // by tag
     console.dir(givenTag);

     let tag = document.getElementsByTagName("h3");  // by tag
     console.dir(tag);


/* Query Selector :-

 document.querySelector("myId / myClass / tag"); // it returns the first element.

 document.querySelectorAll("myID / myclass / tag"); // it returns a node list. */

//  for example :-

 let firstEl = document.querySelector(".one");
 console.dir(firstEl);

 let allEl = document.querySelectorAll(".one");
 console.dir(allEl);

// Properties :- 

// (i) tagName :- returns tag or element nodes.

// (ii) innerText :- returns the text content of the element and all its children.

// (iii) innerHTML :- returns the plain text or HTML contents in the ElementInternals.

// (iv) textContent :- returns textual content even for hidden elements.


// Nodes :- Nodes are the elements of the tree like structure.

// (i) Text node :- the frst child which is return is our text node.

// (ii) Comments node :- we ignore it.

// (iii) Elements node :-Basically  all the node are our element node 