/* Events in js :- The change in state of an object is known as an Event.

Events are fired to notify code of "interesting changes" that may affect code execution.Event

(i) Mouse events ( click, double click etc.)

(ii) keyboard events ( keypress, keyup, keydown)

(iii) Form events (submit etc.)

(iv) Print event & many more */

// Event handling in js file has more priorty than inline event handling.
// We can handle an event only one time either inline or in js.

// node.event = () => {
//     handle here
// }

//for example :- 

let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("Jai Shri Ram");
    alert(" Form is Successfully Submitted");
    // let a= 25;
    // a++;
    // console.log(a);
};

/* Event Object :- It is a special object that has details about the event.AT_TARGET

All event handlers have access to the Event Object's properties and methods.

node.event = (evt) => {
    handle here
}  */

let btn2 = document.querySelector("#btn2");
btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

let div = document.querySelector("#myId");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

/* Event Listeners :- we can do multiple work at the same time 

(i) node.addEventListener("Event", callback)

(ii) node.removeEventListener("Event", callback)

* Note:- the callback reference should be same to remove * */

// for example :- (i)

let btn3 = document.querySelector("#btn3");

// btn3.addEventListener("click", (evt) => {
//     console.log("button3 was clicked");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// });

btn3.addEventListener("click", () => {
    console.log("button3 was clicked - handler 1");
});


btn3.addEventListener("click", () => {
    console.log("button3 was clicked - handler 2");
});

const handler3 =  () => {
    console.log("button3 was clicked - handler 3");
};

btn3.addEventListener("click",handler3);

btn3.addEventListener("click", () => {
    console.log("button3 was clicked - handler 4");
});

btn3.removeEventListener("click", handler3);