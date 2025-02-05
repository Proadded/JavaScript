function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");  
}

// sayMyName()

// //while writing functions (whatever you write here) is called parameters
// function addTowNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// //while calling (whatever you write here) is called arguments
// addTowNumbers(3, 4)
// addTowNumbers(3, "4")

//2nd way to write the same

function addTowNumbers(number1, number2){
    let result = number1 + number2;
    return result
}

const result = addTowNumbers(3, 5)
// console.log("Result: ", result);



function loginUserMessage(username){
    if(username === undefined){
        console.log("pls enter a username");
        return
    }
    return `${username} just logged in`
}
//(username === undefined) can be also wrote as (!username)

// console.log(loginUserMessage("Aditya"))
// console.log(loginUserMessage())


//here ... is rest operator
function CalculateCartPrice(...num1){
    return num1
}

console.log(CalculateCartPrice(2000, 530, 600, 400));

const user = {
    username: "Aditya",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
    
}


handleObject(user)

handleObject({
    username: "Dost",
    price: 599
})

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 1000, 6969]));
//koi farak nai padta