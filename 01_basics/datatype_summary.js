// primitive
// 7 types : String, Number, Boolean, Null, undefined, Symbol, Big Int

// const score = 100
// const score = false
// JavaScript is dynamically typed, meaning that variables can hold any type of data, and their types can change during runtime
// TypeScript: JS ka cousin

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);
//same value ke liye bhi different return hogi

// Reference / Non-Primitive
// Array, Objects, Functions

const heros = ["Saktimaan", "Naagraj", "doga"];//Reference
let myObj = {
    name: "Aditya",
    age: 22,
}//object 

const myFunction = function(){
    console.log("Hello World");   
}

console.log(typeof outsideTemp);

// *****************************************************

// Stack Memory (Primitive Datatypes), Heap Memory (Non Primitive Datatypes)

//Stack Example
let myYoutubeName = "AdityaVerma.com"

let anotherName = myYoutubeName
anotherName = "AdityaKiCoding"

console.log(myYoutubeName);
console.log(anotherName)

// Stack ke under data ki copy assign hoti h esliye changes karne pe koi error nai aaya

//Heap Example
let userOne = {
    email: "gojo@gmail.com",
    upi: "upi@upi"
}

let userTwo = userOne

userTwo.email = "gojo@google.com"

console.log(userOne.email);
console.log(userTwo.email);
//Heap ke ander original value ka refence diya jata h
//matlab ek me changes karne se original value change ho jati ha 