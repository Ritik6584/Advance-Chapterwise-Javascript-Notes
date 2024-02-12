/* Classes & Objects :- 

(1) Prototypes in JS :- A javasript object is an identity having state and behavior(properties and method).
        JS objects have a special property called prototype .
        We can set prototype using  __proto__ .

* If object & prototype have same method , objects method will be used . * */

// for example :-

const student = {
    fullName: "Ritik", //this is property
    age: 19,   //this is property
    marks: 70,    //this is property
    printMarks: function () {                 //this is function or method
        console.log("marks =", this.marks)     //this is function or method
    }
}

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
}

const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    }
}

const karanArjun2 = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 30%")
    }
}
console.log(karanArjun2);

karanArjun__proto__ = employee;
karanArjun2__proto__ = employee;


/* (2) Classes in JS :- Class is a program-code template for creating objects.
    Those Objects will have some state(variables) & some behavior(functions) inside it.*/

// for example :-

/*   class ToyotaCar{
       start(){
           console.log("start");
       }
       stop(){
           console.log("stop");
       }
       setBrand(brand){
           this.brand =brand;
       }
   }

   let fortuner = new ToyotaCar();
   fortuner.setBrand("fortuner");
   let lexus = new ToyotaCar();
   lexus.setBrand("lexus"); */

/* Constructor() method is :            
  (i) Automatically invoked by new
  (ii)initializes objects */

// for example :-

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new objects")
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner", 10); //constructor
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12);  //constructor
console.log(lexus);

/* Inheritance in JS :- Inheritance is passing down properties & methods from parent class to child class.

* if Child & Parent have same method , child's method will be used [Method Overriding] */

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();
// console.log(obj);


// class Person {
//     constructor(){
//         this.species = "homo sapiens";
//     }
//     eat (){
//         console.log("eat");
//     }

//     sleep (){
//         console.log("sleep");
//     }
//     work (){
//         console.log("do nothing");
//     }
// }

// class Engineer {
//     work(){
//         console.log("solve problems , build something");
//     }
// }

// let RitikObj = new Engineer();

// let p1 = new Person();
// let e1 = new Engineer();


/* Super Keyword :- The super keyword is used to call the constructor of its parent class to access the parent's properties and method .

For example :- */

class Person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(name) {
        super(name); //to invoke parent class instructor
    }

    work() {
        super.eat();// if we want to call the eat() function first before work function().
        console.log("solve problems, build something");
    }
}

let engObj = new Engineer("Ritik");

//  Error Handling :-  is a process in which we have a method to solve the error . bcz if there is any error in btw the code then our code from the line where the error is present isn't run.

// for example if we have a doubt that in my code in line no.175 can be an error so we can put  that line i side the block "try{}", and pass it from cath variable

let a = 5;
let b = 4;

console.log("a =", a);
console.log("b =", b);
console.log("a+b =", a + b);
console.log("a+b =", a + b);
console.log("a+b =", a + b);
try {
    console.log("a+b =", a + c);
} catch (err) {
    console.log(err);
}
console.log("a+b =", a + b);
console.log("a+b =", a + b);
console.log("a+b =", a + b);
console.log("a+b =", a + b);