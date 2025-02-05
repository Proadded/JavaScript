// for of 

// little array specific

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// here object doest mean "Object" the structure, its used as a generalised term here, like where you want to perform the loop
// for (const element of object) {
    
// }


for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

//******************** */
// Maps
// Holds ke value pairs
// data is always unique, never holds duplicate data
// and order is always followed


const map = new Map()
map.set('IN', "India")
map.set('USA', "United Sates of America")
map.set('FR', "France")
// map.set('IN', "India")

// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

for (const [key, value] of map) {
    // console.log(key + " :- " + value);
    
}

const myObj = {
    'game1': 'NFS',
    'game2': 'God Of War'
}

// myObj is not iterable
// there are different method to iterate objects but not this one
// for (const [key, value] of myObj) {
//     console.log(key + " :- " + value);
// }

