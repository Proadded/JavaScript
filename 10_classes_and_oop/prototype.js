// // let myName = "Aditya"
// // 6
// let myName = "Aditya      "
// // 12 
// console.log(myName.length);


// console.log(myName.trueLength);
// this is a challenge


let myHearos = ["thor", "spiderman"]
let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function (params) {
        console.log(`Spidey power is ${this.spiderman}`);
        
    }
}

Object.prototype.aditya = function (){
    console.log("Aditya is present in all the objects");
    
}

heroPower.aditya()
// question is "Can i add aditya() as a method in objects so it can be accessed from all the objects?"
// yes
myHearos.aditya()
// same here


Array.prototype.heyAditya = function () {
    console.log("Aditya present only for aaray");
}

myHearos.heyAditya()
// works for this
// heroPower.heyAditya()
// doesnt work for this




// ==========================
// inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
    // it have inherited the prototypr properties of TeachingSupport
}

// another way
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


// ===========
// trueLength challenge

let anothername = "ChaiAurCode"

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
    
}

anothername.trueLength()
"Aditya     ".trueLength()
"  Adi   ".trueLength()