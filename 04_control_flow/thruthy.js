// const userEmail = "a@adity.ai"
// const userEmail = ""
const userEmail = []


if (userEmail){
    // console.log("Got User Email");    
}
else{
    // console.log("Dont have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, null, "", undefined, NaN 

// truthy values
// "0",'false', " ", [], {}, function (){}

if (userEmail.length === 0){
    // console.log("Array is empty");
    
}

const emotyObj = {}
// if (Object.keys(emotyObj).length === 0) {
//     console.log("Object is empty");
// }

// Object.keys(emotyObj) gives an array

// Nullish Coalescing Operator (??): null, undefined

// let val1 = 5 ?? 10
// let val1 = null ?? 10
let val1 = undefined ?? 10

// console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTea = 100
iceTea <= 80 ? console.log("less than 80"): console.log("greater than 80");

