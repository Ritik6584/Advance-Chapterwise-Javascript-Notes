// Comments in JS:-
//  -> Part of code which is not executed

// (i) This is a single line comment
/* (ii) This is a
     multi line
     comments*/


// Operators in JS:-used to perform some operation on data
//    (i) Arithmatic Operators
        //   Add operators :- "+"
        // Subtract Operators :- "-"
        // Multiply Operators :- "*"
        // Divide  Operators :- "/"
        // Modulus :- "Remainder = %"
        // Exponentiation :- "Power = **"

//       Unary Operators :-
        //       Increment Operator :- "++" (e.g, a++ means a=a+1)
        //       Decrement Operator :- "--" (e.g, a-- means a=a-1)

let a = 5;
let b = 4;

console.log( "a =",a,"& b =" ,b)
console.log(" a + b =" ,a+b);
console.log(" a - b =" ,a-b);
console.log(" a * b =" ,a*b);
console.log(" a / b =" ,a/b);
console.log(" a % b =" ,a%b );
console.log(" a ** B=" ,a**b);
console.log( "a ++ =" , a++);  //post increment
console.log("a = ", a)
console.log( "++ a =" , ++a);  //pre increment
console.log(" a = ",a)
console.log( "a -- =" , a--);  //post decrement
console.log("a = ",a)
console.log( "-- a =" , --a);  //pre decrement
console.log("a = ",a)


//  (ii) Assignment Operators :- to assign values to the variables
        //   " = "  , :-  (a=5)
        //  " += "  , :-  a += 5 means a = a+5
        //  " -= "  , :-  a -= 5 means a = a-5
        //  " *= "  , :-  a *= 5 means a = a*5
        //   " /= " , :-  a /= 5 means a = a/5
        //  " %= "  , :-  a %= 5 means a = a%5
        //  " **= " , :-  a **= 5 means a= a**5

        // e.g,
        let m = 5;
        let n = 2;

        m += 4;
        console.log("m +=", m) ; // 9

        m -= 4;
        console.log("m -=", m); // 1

        m *= 4;
        console.log("m *=", m); // 20

        m /= 4;
        console.log("m /=", m); // 1.25

        m %= 4;
        console.log("m %=", m); // 1

        m **= 4;
        console.log("m **=", m); // 625


//  (iii)  comparison Operators :- to compare two values
        //  "=="  :-  Equal to // only compare the value
        //  "!="  :-  Not equal to
        //  "===" :- Equal to & type // comapre the value and its type 
        //  "!==" :- Not equal to
        //  " > " :- Greater than
        //  " < " :- Less than
        //  " >= " :- Greater than or equal to
        //  " <= " :- Less than or equal to

        // e.g,

//        let m = 5;
//        let n = 4;

//        console.log("m == n" , m==n);
//        console.log("m != n" , m!=n);
//        console.log("m === n" , m===n);  // Strict version
//        console.log("m !== n" , m!==n);  // Strict version
//        console.log("m > n", m>n);
//        console.log("m < n", m<n);
//        console.log("m >= n", m>=n);
//        console.log("m <= n", m<=n);

//  (iv) Logical Operators :- Evaluate the multiple expression to give the final value 
          // " && " :- Logical AND
          // " || " :- Logical OR
          // " ! "  :- Logical NOT
        
        //   table 
                //      condition 1     condtiton 2      &&          ||       

                //       true             true          true        true      
                //       true             false         false       true
                //       false            true          false       true
                //       false            false         false       false

// COnditional Statements :- To implement some condition in the code

// There are 3 type of conditional Statements:-

  // (i) if statement:-

//       e.g,1

//     let mode = "dark";
//     let color;
//     if (mode === "dark"){
//           color = "black";
//     }

//     if (mode === "light"){
//          color = "white";
//     }

//     console.log(color);

//     e.g,2
   

//   let age = 18;
   
//   if(age >= 18){
//       console.log("you can vote")
//   }

//   if(age < 18){
//         console.log("you cannot vote")
//   }


// (ii)  if-else Stataments  :-
 
//   e.g,1

 /* let mode = "dark";
 let color;
 if( mode === "dark"){
        color = "black";
 } else{
        color = "white";
 }
  console.log(color); */
   
//   e.g,2

 /*  let age = 18;
   
  if(age >= 18){
      console.log("you can vote")
  } else {
        console.log("you cannot vote")
  }  */

//     e.g,3

 /*  let num = 17;

 if( num % 2 === 0){
        console.log(num, "is even");
 } else{
        console.log(num, "is odd");
 }  */
  

//  (iii) else-if Statement :-
    
//    e.g, 1
 

let mode = "dark";
let color;

if (mode === "dark"){
        color = "black";
} else if ( mode==="pink"){
        color = "pink";
} else if (mode === "blue"){
        color = "blue";
} else{
        color = "white";
}

 console.log(color);


//  (v) Ternary Operators :-

//     codition ? true output : false output

  let age = 25;

  let result = age >= 18 ? "adult" : "not-adult";
    console.log(result , age);