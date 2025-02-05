// if 

// const isUserLoggedIn =  true
// const tempreture = 41

// if (tempreture < 40) {
//     console.log("less than 40");
    
// }
// else {
//     console.log("greater than 40");
    
// }

// <, >, <=, >=, == (to check the values), === (check values with datatypes), !==

// if (true){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

const balance = 1000

// if (balance > 500) console.log("test");
// if (balance > 500) console.log("test"), console.log("test2"); //not a good practice

// if (balance < 500){
//     console.log("less than 500");    
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1500");
// }

const userLoggedIn = true
const DebitCard = true
const LoggedInWithGoggle = false
const LoggedInWithEmail = true

if (userLoggedIn && DebitCard){
    console.log("Allowed to buy course");
}
if (LoggedInWithEmail || LoggedInWithGoggle){
    console.log("User Logged in");
}
