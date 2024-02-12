console.log("Hello World"); // print something on our console window
console.log("Jai Shri Ram");

Name = "Tony Stark";
age = 18;
price = 999;
x = "null";
y = "undefined";

isFollow = "true";

console.log(Name);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollow);

// they are case sensitive

name="ritik";
Name="Ritik";

console.log(name);
console.log(Name);

    //   Data types
// (1)primitive datatypes
    // 7 datatypes 
// (i) Number datatypes
   age = 18;
  console.log(age);

// (ii) string datatypes
   fullName = "Ritik";
  console.log(fullName);

// (iii) boolean datatypes
   isFollow = "true";
   console.log(isFollow);

// (iv)  undefined datatypes
//    if we don't store any value in x then x is undefined
   let m;
   console.log(x);


// (v) null datatypes
   y = null; 
   console.log(y);

// (vi) BigInt datatypes  
   let n = BigInt("123");
   console.log(n);

// (vii) symbol datatypes
   let p = Symbol("Hello !");
   console.log(p);


// (2) non-primitive Datatypes
//  object datatypes :- Colllection of values

  const student = {
     Fullname : "Rahul Kumar",
     Age : 20,
     cgpa : 8.2,
     isPass: true,
  };
 
//   if we want to change the age of the student to 21
 
  student["Age"] = student["Age"] + 1;  

  console.log(student["Age"]);

//   if we want to change the name Rahul kumar to Rahul sharma

  student["Fullname"] = "Rahul Sharma";
  
   console.log(student["Fullname"]);
   
// (i) Arrays Datatypes
// (ii) Fuctions datatypes
