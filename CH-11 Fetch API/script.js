/* Fetch API (Application Programming Interface) :- The Fetch API provides an interface for fetching (sending/receiving) resources.API

   It uses Request and Response Objects.

   The fetch() method is used to fetch a resource (data).

   let promise = fetch(url,[options]) */

//    for example :-

const URL = ("https://cat-fact.herokuapp.com/facts");
const factPara = document.querySelector("#factPara");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    console.log("getting data ...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data[0].text;
    // console.log(data[0].text);
};
// console.log(getFacts());

btn.addEventListener("click", getFacts);

// Understanding Terms :-

// (i) AJAX :- It is Asynchronous JS & XML

// (ii) JSON :- It is a Javascript Objec Notation

// (iv) JSON() method :- Returns a second promise that resolves with the result of parsing the response body text as JSON.
//        (Input is JSON output is JS Object)



// Request & Response :-

// HTTP Verbs :- (Hyper Text Transfer Protocol)  

// Response Status Coode :-

// (i)   Informational responses (100 – 199) :-  it means the which we put to the server is under processing
// (ii)  Successful responses (200 – 299)    :-  it means the server has successfully catch the request
// (iii) Redirection messages (300 – 399)    :-  it means that ther is a problem page is reloading
// (iv)  Client error responses (400 – 499)  :-  it means that the request which we have send is bad request or may be network issue
// (v)   Server error responses (500 – 599)  :-  it means that we have send the right request but there is a problem in server responding or API response

// *HTTP response headers also contain details about the response, such as content type,HTTP status code etc. *