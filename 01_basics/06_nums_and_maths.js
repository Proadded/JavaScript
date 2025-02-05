const score = 400
const balance = new Number(100)

// console.log(score);// only prints the value
// console.log(balance);// explicitly print the datatype too
// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));//decimal dega 

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));//returns string

const otherNumber1 = 123.8966
// console.log(otherNumber1.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));//Indian Standards, by default US standards

// JavaScript Min, Max, Min sage Integer, Max Sage Integer and many more in Numbers


// +++++++++++MATHS++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// //+ve remains +ve, but -ve becomes +ve

// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 5, 9, 6));
// console.log(Math.max(4, 3, 5, 9, 6));

console.log(Math.random());
// any value between 0 and 1
console.log((Math.random()*10) + 1);
// value range more than eqaul to 1
// +1 to avoid any number.01 type scenario 
console.log(Math.floor((Math.random()*10) + 1));
// lower round off value

const min = 10
const max = 20
console.log((Math.random() * (max - min + 1) + min));
