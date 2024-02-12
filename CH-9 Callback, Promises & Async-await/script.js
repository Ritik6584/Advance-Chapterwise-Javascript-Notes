// Async-await >> promises >> callback hell. //which is better ?

/*Sync in JS :-

(i) Synchronous :- Synchronous means the code runs in a particular sequence of instructon given in the program .
               Each instruction waits for the previous instruction to complete its execution.Each */

// for example :-

/* console.log("one");
   console.log("two");     // sequential programming is called synchronous programming.
   console.log("three"); */


/* (ii) Asynchronous :- Due to synchronous programming , something imp instruction get blocked due to some previous 
                   instruction, which causes the delay in the UI.
                   Asynchronous code execution code allows to execute next instructions immediately and doesn't block the view. */

// for example :- 

/*console.log("one");
console.log("two");

setTimeout(() => {            // setTimeout() is a function which takes time to execute and the remaining function doesn'y wait to execute this function
    console.log("hello");      // this function execute afyer 4 sec
}, 4000);               // 1sec = 1000 ms


console.log("three");
console.log("four");*/


/* Callbacks :- A callback is a function passed as an arguement to another function */

// for example :- (i)

/*function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);                       // this program is in synchronous programming
}

calculator(1, 2, sum);


// for example :- (ii)

const hello = () => {
    console.log("hello");
}                                          // this is asynchronous programming

setTimeout(hello, 4000);*/


/* callback Hell :- Nested callbacks stacked below one another forming a pyramid strycture. (Pyramid of Doom)

        This style of programming becomes difficult to understand & manage. */

//Nesting:- it means that to write one thing inside the another like as  we can write a for loop inside the another for loop.


// for example :-

/*function getData(dataId, getNextdata) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextdata) {
            getNextdata();
        }
    }, 5000); // take 5sec to fetch next data.
}
 // this is nested programming called callback hell
getData(1, () => {
    console.log("getting data 2....");
    getData(2, () => {
        console.log("getting data 3....");
        getData(3, () => {
            console.log("getting data 4....");
            getData(4, () => {
                console.log("getting data 5....");
                getData(5);
            });
        });
    });
}); */


/* Promises :- Promises is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell.

* resolve and rejects are callbacks provided by jS *

let promise = new Promise((resolve,reject) => {....}) //functon with two handlers(resolve() and reject());

there are 3 states of promises :- (pending, resolved, rejected); */

// for example :- (i)

/* let promises = new Promise((resolve, reject) => {
    console.log("i am a promise");
    resolve("success");
});

console.log(promises); */

// for example :- (ii)

// function getData(dataId, getNextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextdata) {
//                 getNextdata();
//             }
//         }, 5000);
//     });
// };
// let promise = getData(123);
// console.log(promise);

/*A javaScript Promise objct can be :
(i) Pending :- The result is undefined 
(ii)Resolved :- The result is a value (fullfilled)     resolve(result)
(iii)Rejected :- The result is an error                reject(error)*/


/* we have two function in the promise :-

(i).then() :- we can access the proper value of a result after resolve/success/fulfilled.  
 promise.then((res) => {....});

(ii).catch() :- we can access the proper value of a result after rejected
promise.catch(() => {....}); */

// For example :-

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am a promise");
//         // resolve("success");
//         reject("some error occured");
//     });
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected" ,err);
// });

//  Promise Chain :- to resolve the problem in a sequence.

// For example :-  (i)

/*function asynchronous1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("success")
        },5000)
    });
};

function asychronous2(){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve("success");
        },5000);
    });
};

console.log("fetching data 1 ....");
asynchronous1().then((res) => {
    console.log("fetching data 2 ....");
    asychronous2().then((res) =>{});
}); */

// for example :- (ii)


function getData(dataId, getDatanext){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("data", dataId);
            resolve("success");
            // if(getNextdata){
            //     getNextdata();
            // }
        },3000);
    });
};

// first method to call the data in a sequence

// getData(1).then((res) =>{
//     console.log(res);
//     getData(2).then((res) =>{
//         console.log(res);
//         getData(3).then((res) =>{
//             console.log(res);
//             getData(4).then((res) =>{
//                 console.log(res);
//                 getData(5).then((res) =>{
//                     console.log(res);
//                 })
//             })
//         })
//     })
// });

// a better way to call the data in a sequence

getData(1)
.then((res)=>{
    return getData(2);
})
.then((res) => {
    return getData(3);
})
.then((res) =>{
    return getData(4);
})
.then((res) =>{
    return getData(5);
})
.then((res) =>{
    console.log(res);
});


/* Async-Await :- Async function always returns a promise.

async function myFunc(){...}

await pauses the execution of its sorrounding async function until the promise is settled.

* it is an easiest way to call the function in a sequence * */

function getData(dataId,getNextdata){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        console.log("data",dataId);
        resolve("success");
        },3000);
    });
};

async function getAlldata(){
    console.log("getting data 1....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(3);
    console.log("getting data 4....");
    await getData(4);
    console.log("getting data 5....");
    await getData(5);
    console.log("getting data 6....");
    await getData(6);
};

// IIFE :-Immediately Invoked Function Expression

// IIFE is a function that is called immediately as soon as it is defined.

/*
(i) (function () {
          // …
      })();
  
 (ii)  (() => {
         // …
      })();
  
 (iii)  (async () => {
         // …
      })();
*/