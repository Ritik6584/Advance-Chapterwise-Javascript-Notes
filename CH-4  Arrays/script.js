// Arrays :- a collection of similar type of items linearly. it shows the item according to the position or index.

//* arrays are mutable it can be change

    // for example :-

    /* let marks = [97, 87, 69, 84, 78];
     console.log(marks);
     console.log(marks.length);

     let heroes = ["ironman", "thor", "hulk", "spiderman", "captain america"];
     console.log(heroes); */


//  Array indices :-  to find the item from its position or indices.

    //  for example :-
    let arr = [78, 89, 87, 69, 88, 56, 73];
    arr[3] = 75;   // if we want to replace the marks 69 to 75 ,where 3 is the position of 69,

    let pos = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]]; //to find the marks form its position 


    console.log(pos);


//  Looping over an Array :- To print all element of an array.

      // loops work in iterable(strings, objects, arrays);

  // (i)for loop :-
     //   e.g, 1 :-

   /* let heroes = ["ironman", "thor", "hulk", "spiderman", "captain america"];

    for (idx = 0; idx < heroes.length; idx++) {
        console.log(heroes[idx]);
    } */

  // (ii)  for of loop :- we can access individual item form the items
      // e.g, 1

      let heroes = ["ironman", "thor", "hulk", "spiderman", "captain america"];

      for (let hero of heroes){
        console.log(hero);
      }

      //e.g, 2

      let cities = ["Delhi", "Noida", "Meerut", "Muzaffarnagar", "Ghaziabad", "Gurgaon", "Saharanpur","Ambala", "Chandigarh"];

      for (let city of cities){
        console.log(city.toUpperCase());
      }

// Array Methods :-
//  there are various  methods of array:-

 //   (i) Push() method :-  To add element in an array is called push method.

//   All elements are add and subtract at the end of the array list.

     //  e.g,

        //  let Ph = ["oppo","vivo","samsung","oneplus","apple","nokia"];
        //  Ph.push("lenovo"); 
        //  console.log(Ph);



 //  (ii) Pop() method :- To delete element from the array list.

     //  e.g, 

         let Ph = ["oppo","vivo","samsung","oneplus","apple","nokia"]; // elements deleted from the end
         console.log(Ph);
         let deleteditems = Ph.pop("nokia");
         console.log(Ph);
         console.log("deleteditems", deleteditems);

 //   (iii) tostring() method :- To convert the array into string.

     //  e.g, 

        let marks = [76,87,89,64,48];
        console.log(marks);
        let num = marks.toString();
        console.log(num);

 //  (iv)  concat() method :- To join multiple arrays and returns result .

     //  e.g, 

       let marvelHeroes = ["thor", "ironman", "spiderman"];
       let dcHeroes = ["superman", "batman"];
       let indianHeroes = ["shaktiman", "krish"];

       let Heroes = marvelHeroes.concat(dcHeroes , indianHeroes);

       console.log(Heroes);

 // (v)  unshift() method :- It works as a push method but it add the item at the start point.

     //  e.g,
     
      //  let sub = ["physics","chemistry","maths","biology", "english"]; 
      //  console.log(sub);
      //  sub.unshift("hindi");
      //  console.log(sub);

 // (vi)  shift() method :- It works as a pop method but it deleted the items from the start point.

     // e.g, 

    //  let sub = ["physics","chemistry","maths","biology", "english"]; 
    //  console.log(sub);

    //  let add = sub.shift();
    //  console.log("deleted", add);
    //  console.log(sub);


 // (vii)  slice() method :- Returns a piece of array.

     //  e.g, 

     let sub = ["physics","chemistry","maths","biology", "english"]; 

     console.log(sub);

     console.log(sub.slice(1,3)); // it gives chemistry and maths 


 // (viii)  splice() method  :- it helps to change the original array(add, remove, replace).
  // method :-   splice (startidx, delcount, newEl...);
     // e.g,

    //  let count = [1, 2, 3, 4, 5, 6, 7, ];
    //  count.splice(3, 2, 101,102);
    //  console.log(count);

  // if we want only add element in the array

    // let count = [1, 2, 3, 4, 5, 6, 7, ];

    // count.splice(3, 0, 101);
    // console.log(count);

  // if we want only remove element from the array
    
    // let count = [1, 2, 3, 4, 5, 6, 7, ];

    // count.splice(3, 2);
    // console.log(count);

  // if we want only replace element in the array 

    let count = [1, 2, 3, 4, 5, 6, 7, ];

    count.splice(2, 1, 103);
    console.log(count);