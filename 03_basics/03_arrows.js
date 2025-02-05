const user = {
    username: "Aditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        //we are not hardcoding the username value here
        //this means username will used from this context and can be changed
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Om"
// user.welcomeMessage()

// console.log(this);//empty object

// function chai(){
//     let username = "Aditya"
//     console.log(this);
//     // console.log(this.username);
//     //this can only be used in objects
    
// }

// chai()

// const chai = function(){
//     let username = "Aditya"
//     console.log(this.username);
// }
// chai()


// in arrow function
const chai = () => {
    let username = "Aditya"
    console.log(this.username);
}
// chai()

//**************Pure Arrow functions */

// const add = (num1, num2) => {
//     return num1 + num2
// }

// const add = (num1, num2) =>  num1 + num2
// const add = (num1, num2) =>  (num1 + num2)   same thing
// another way to use arrow function, called impli
// no return needed

//if you want to return object
const add = (num1, num2) =>  ({username: "Aditya"})


console.log(add(3, 4));

const myArrays = []