//singleton

//literals ki tarah agar object ko declare kiya to singleton nai banta h
//constructor ki tarah agar kare to singleton banega

//object literals

const mySymbol = Symbol("Key1")

const JsUser = {
    name: "Aditya",
    "Full Name": "Aditya Verma",
    [mySymbol]: "mykey1",//yaha symbol use karna h esliye [] dala warna ye as a string treat hota
    location: "Ahmedabad",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoggedIN: ["Monday", "Saturday"]
}

// console.log(JsUser.email);//thik h but ese better tarika h
// console.log(JsUser["email"]);//ye jayada better h kyuki
// console.log(JsUser["Full Name"]);//yaha full name ek object ki tarah treated h, agar space hatade to wapas same tarah se use kar sakte h, but jayada better tarika yahi h
// console.log(JsUser[mySymbol]);
// console.log(typeof JsUser[mySymbol]);

JsUser["email"] = "aditya@chatgpt.com"
// value overwrite karne ke liye
// console.log(JsUser["email"]);


// Object.freeze(JsUser)
// ese karne ke baad kiye gaye change propogate nai honge
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");    
}

JsUser.greeting2 = function() {
    console.log(`Hello JS User, ${this["name"]}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());


