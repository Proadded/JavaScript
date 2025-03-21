function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
// Function is a function and an object at the same time

function CreateUser(username, score) {
    this.username = username 
    this.score = score
}

CreateUser.prototype.increment = function () {
    // score++
    this.score++
}

CreateUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`);   
}

// const chai = CreateUser("chai", 25)
// const tea = CreateUser("tea", 250)

const chai = new CreateUser("chai", 25)
const tea = new CreateUser("tea", 250)

chai.printMe()


// Copy Pasted
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/