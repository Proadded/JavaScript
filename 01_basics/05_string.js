const name = "Aditya"
const repoCount = 50

// console.log(name + repoCount + " Value");
//not a good representation

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
// this is called string interpolation

const gameName = new String('Aditya-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);
//in slice you can use negetive ranges :- (-8, 4) types
//in substring it wont obey

const newString1 = "   Aditya    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://aditya.com/aditya%20verma"
console.log(url.replace('%20','-'))

console.log(url.includes('aditya'));
console.log(url.includes('sunder'));
//checks if the string is included or not

console.log(gameName.split('-', 1));
//                              ^
//                              | 
//limit ke bina bhi use kar sakte h usse sare split bata deta h
