class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

// User's functionality is available with Teacher too
class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
        // doesnt need to call explicitly 
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()

// masalaChai doesnt have addCourse() access
const masalaChai = new User("masalaChai")
// masalaChai.addCourse()
masalaChai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
