const accountId = 144553
let accountEmail = "aditya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2
// const cant be changed, not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bangalore"
let accountState;

console.log(accountId);

/*
pefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])