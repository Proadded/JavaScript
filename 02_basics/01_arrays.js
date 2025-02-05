// [] backets
// () parenthisis
// {} braces

const myArray = [0, 1, 2, 3, 4, 5]// no problem in taking different types of elements
// console.log(myArray[1]);
const myHeros = ["Saktimaan", "Naagraj"]

const myArray2 = new Array(1, 2, 3, 4, 5) 

//Array Methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop() //pops last value
// myArray.unshift(9)//pushes at start
// myArray.shift()//pops from start
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));

// const newArray = myArray.join()
// console.log(newArray);
// console.log(typeof newArray);
// console.log(myArray);

//slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3)
console.log(myn2);
console.log("C", myArray);







