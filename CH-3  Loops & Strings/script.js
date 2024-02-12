// Loops in Js :- Loops are used to execute a piece of code again and again

//  (i)      For Loop :- to print anything till the stopping condition is not match one by one,

//    e.g, 1

//    print 1 to 5

/*    for( i=1; i<=5; i++ ) {
        console.log("i =", i);
    }  */

    //   where (i=1) is  initialization,
    //         (i<=5) is a stopping condition,
    //         (i++) is  updation,

//     e.g, 2

//    calculate sum 1 to 5

 /*   let sum = 0;
     for( i = 1; i <= 5; i++ ){
        (sum = sum + i);
     }

     console.log("sum =" ,sum);
     console.log("loop has ended");     */


//      e.g,  3

//      calculate sum 1 to n

/*  let sum = 0;
  let n = 95;
  for (i = 1; i <= n; i++){
    (sum = sum + i);
  }
   console.log("sum =", sum) */

// (ii)   Infinite loop  :- A loop that never ends or if stopping condition is always gives true


// * never use infinite loop ,it may cause website crash , system hang or many more issues we can face if we use infinte loop .
 

// (iii)   While Loop :-
  
/*  let i = 1;
  while(i <= 10){
    console.log("i =", i);
    i++;
  }  */

// (iv)   do-while loop :-

/*  let i = 1;
  do{
    console.log("i =", i);
    i++;
  } while(i <= 10); */
  

// (v)  for-of loops :- it prints the character 

  //  let str = "Ritik";

  //  for (let i of str){
  //   console.log("i =", i);
  //  }  


  //  (vi)    for-in loops :- it returns the keys of object 

  let student = {
    name : "rahul",
    age : 20,
    cgpa : 7.5,
    isPass :true ,
  }
   
  for (let key in student){
    console.log("key =", key ,", value =", student[key]);
  }
    
     
//  Strings in JS :-

    //  Create Strings :-
          let str = "FrontendDeveloper";  // in duble qoutes
          let str2 = 'FrontendDeveloper'; // in single quotes
          
          console.log(str);
          console.log(str2);

// Inbuilt Properties of Strings :-

  // (i) str.length :- To calculate the length of the Strings.
      
      // for example :-
       let str3 = "FrontendDeveloper";
        
       console.log(str3.length); 

  // (ii)  Strings indices :-To calculate the position of a particular letter in the strings.

      // for example :-
      let str4 = "FrontendDeveloper";  //in strings position start from the zero.

      console.log(str4[4]);

// Template Literals in JS :- This is a special type of strings which is write in the sentence form inside the backtick(``).
                            //  or 
              // A way to have enbedded expressions in strings.

     // for example :-
      let specialString = `I want to become Frontend Developer`;
       
      console.log(specialString);

  //  (i) Strings interpolation  :- To create strings by doing substitution of placeholder.
        //  `string text ${expression} string text`

     //  for example :-
      let obj = {
        item: "pen",
        price: 10 ,
      }

      let output = `The cost of ${obj.item} is ${obj.price} rupees`;

      console.log(output);

//   (ii)  Escape Character :- which is hidden and consider only one character in the length.
       //        (i) denoted by (\n) is used to to divide the line of the strings.
       //        (ii) denoted  by (\t) for the tab space bw the strings.
       //        (iii)

      let str5 = "Web\nDeveloper"; // to write the web and developer in different line.

      console.log(str5);

      let str6 = "Web\tDeveloper"; //for the tab space bw the Web and the Developer.

      console.log(str6);
      console.log(str6.length); // \t are the two character but  consider as the one character.

//   Strings Methods :-strings method are used to represent and work with a sequence of characters.

         //    These are built-in functions to manipulate a string.

    //     (i)  str.toUpperCase() :-   if we want to convert any string completely in upper case then we use this function.

       //  for example :-
         let str7 = "frontend developer";

         let upper = str7.toUpperCase();
         console.log(upper);

    //    (ii)  str.toLowerCase() :- if we want to convert any string completely in lower case then we use this function.

       //  for example :-
         let str8 = "FRONTEND DEVELOPER";

         let lower = str8.toLowerCase();
         console.log(lower);

    //   (iii) str.trim() :- to remove the whitespaces from the start and the end not from the between of the strings.

       //  for example :-
         let str9 = "      Frontend Web   Developer    ";

         let gap = str9.trim();
         console.log(gap);

    //  (iii)  str.slice(start , end) :- returns the specific part of the string which we want from aparticular starting position to the ending position but the ending position is not included.

       //  for example :- 
        let str10 = "Frontend Developer";

        let cut = str.slice(0 ,5);
        console.log(cut);

    //  (iv)  str1.concat(str2) :- it work to join the two strings 

      //  for example :-
       let str11 = "Frontend";
       let str12 = "Developer";

       let add = str11.concat(str12);
       console.log(add);
      //  console.log(str11 + str12); we can also use this method to add(concatanation) the two strings.

    //  (v) str.replace(searchVal , newVal) :-  to replace the old value of string to the new  value of string.

      //  for example :-
       let str13 = "FrontendDeveloper";

       let rep = str13.replace("end" , 123);
       console.log(rep);


    //  (vi) str.charAt(idx) :- to search the position of particular character or index.

      //  for example :-
       let str14 = "Developer";

       let character = str14.charAt(4);
       console.log(character);