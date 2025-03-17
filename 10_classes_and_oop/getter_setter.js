class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}aditya`
        // return this._password.toUpperCase()
        // _password is used because of max value reached in call stack
        // password got over written
    }

    set password(value){
        this._password = value
        // dont return value in setter 
    }
}

const adi = new User("Aditya.ai", "abc")
console.log(adi.email);
console.log(adi.password);
