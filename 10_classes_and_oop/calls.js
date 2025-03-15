function setUsername(username) {
    this.username = username
}

function createUser(username, email, password) {
    // setUsername(username)
    // not working because its not actually calling it
    
    setUsername.call(this, username)
    // passing current exceution context
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "vermji@fb.com", "123")
console.log(chai);
