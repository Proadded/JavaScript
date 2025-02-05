//{} This is used with objects but if used with any function or for loops or if elses then it is called scope.


//this whole statement is called block scope
if(true){
    let a = 10
    const b = 20
    var c = 30
}

//anything declared outside the statement is called global scope

//console.log(a); cant execute because a is not defined
// console.log(b); cant execute because b is not defined
// console.log(c);
//even when declared in if statement still its values is being used outside it

function one(){
    const username = "Aditya"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    two()
}

// one()

if (true) {
    const username = "aditya"
    if (username === "aditya"){
        const website = " youtube"
        console.log(username + website);
    }
}

//addone(5)
//declare karne se pehele ruun kare to bhi koi khass error nai aayega
function addone(num){
    return num + 1
}

console.log(addone(5));


//addTwo(4)
const addTwo = function (num){
    return num + 2
}

console.log(addTwo(4));
//addTwo ko agar declare karne se pehele agar use kare to error aayega
