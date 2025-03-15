// const user = {
//     username: "Aditya",
//     loginCount: "8",
//     signedIn: "yes",

//     getUserDetails: function () {
//         // console.log("get user data from database");
//         // console.log(`Username: ${this.username}`);
//         // "this" is used to signify the current context
//         console.log(this);
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());


// console.log(this);
//here this is empty because computer those know the context yet


// const promiseOne = new Promise()
// const date = new Date()
// what is "new" mean here
// "new" is a constructor function
// this allows you to make multiple instances using single object literal

function user(username, loginCount, isLoggedIn) {
    // myusername = username
    this.username = username
    // variable = passing value
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
        
    }

    return this
    // still would have worked if "return this" was not written
}

// const user1 = user("Aditya", 18, true)
// const user2 = user("ChaiAurJavaScript", 18, true)
// console.log(user1);
// values got overwritten

// quick fix
const user1 = new user("Aditya", 18, true)
const user2 = new user("ChaiAurJavaScript", 18, true)
console.log(user1);
// impoertance of "new" keyword
// "new" used means a new object has been created also called "instance"

console.log(user1.constructor);

