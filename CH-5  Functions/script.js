// Functions :- A block of code that performs a specific task, can be invoked(call) whenever needed.

//    for example :-

    console.log("Hello !");  // where .log is fixed in this function to print any value in cansole

     "abc".toUpperCase();     //  where .toUpperCase() function is fix

     [1 ,2, 3].push(4,5);    //   .push() funtion is fix

//   Function Definition :-

    // (i)  function functionName(){
    //     do some work
    // }

    // Function Call :- 
    //   functionName();


    // for example :- 1

    // function myFunction () {
    //     console.log("Jai Shri Ram");      // here i have done some work
    //     console.log("Har Har Mahadev");      // here i have done some work
        
    // }

    // myFunction();   // here i have call this function


    // e.g, 2  

    //   function myFunction(msg){   // here inside the brackets is called parameter or input
    //     console.log(msg);
    //   }

    //   myFunction("Jai Shri Ram");  // here inside the brackets is called arguements


//    (ii)  function functionName(parameter 1, parameter 2..) {
//              do some work or calculation;
//          }
             
    // e.g, 1
    
// if we have to find the sum of numbers in function

    function sum(x,y,z){
        console.log(x+y+z);
    }

    let add = sum(300 , 456 , 345); // here i have call the function sum.
     console.log(add);
    // e.g, 2

    function sum(x, y) {
        s = x + y;
        console.log("Before Return");
        return s;
        console.log("After Return"); // after return we can't print any value in the caode
    }

     let val = sum(2 , 3);
     console.log(val);


    //  functions parameters :- they act like local variables of function and they have block scope(means it is valid only inside the function).

// Arrow functions :- compact way of writing a function .
  
/*    const functionName = (param1, param2 ..) =>{
        do some work
    }  */

    // e.g, 
     // sum function :-

           // normal sum

     function sum ( x , y ) {
        return x + y;
     }
      console.log(sum(3,5));
        // sum using arrow function

     const arrowSum = (x , y) => {  //here arrowSum is the function variable and the remaining part is the function which is stored in arrowSum(function varibles).
          console.log(x + y);
     }

     arrowSum(4, 5);  // called the function

     // multiplication function :- 

           //  normal multiplication 

     function mul (x,y) {
        return x * y;
     }
     console.log(mul(4,6));

          // multiplication using arrow function

    const arrowMul = (x , y) => {
          console.log(x * y);
    }
       
    arrowMul(6,7);
    console.log(arrowMul); // here our function is stored in variable arrowMul.

    const printHello = () => {
        console.log("Hello !")
    }

    printHello();


// forEach Loop in Arrays :-

// arr.forEach(callBackFunction);

// callBackFunction :-  Here , it is a funtion to execute for each element in the array.Here

      /*  A callBack function passed as an argument to another function . */

    //   let arr = [1, 2, 3, 4, 5, 6];
      
    //   arr.forEach (function printval(val) {
    //     console.log(val);
    //   } );


    //   arr.forEach((val) =>{
    //     console.log(val);
    //   });

// Some More Array Methods :-
  // (i) Map Method :- Creates a new array with the result of some operation. The value its callback returns are used to form new array.
    // arr.map(callbackFnx(value,idx,array))

   // for example :-
   let nums = [4,6,7,24,43,73];

  let newArr = nums.map((val) => {
     return val*val*val; // we us this method for calculation and for print the same array.
   });

   console.log(newArr);
 
  // (ii)  Filter Method :-Creates a new array of elements that gives true for a condition/filter.

    // e.g, all even element

   let num = [1,2,3,4,5,6,7];
    let NewArr = num.filter((val) =>{
        return val % 2===0;
    });
     
      console.log(NewArr);

  // (iii) Reduce Method :- Performs some operations & reduces the array to a single value.It returns that single value.

    //  let arr = [1,2,3,4];
    //   const output = arr.reduce((res , curr) =>{
    //     return res + curr ; //to print the sum
    //   });

    //   console.log(output);


     let arr = [1,2,34,64,66,43,4];
      const output = arr.reduce((res , curr) =>{
        return res > curr ? res : curr; //to print the largest number
      });

      console.log(output);


      