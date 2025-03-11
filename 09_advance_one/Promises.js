// technically PROMISE is an object

// const promiseOne = new Promise()
// "new Promise" is a feature enabled recentlu
// before they used libraries like "BlueBird"
// take callbacks

const promiseOne = new Promise(function(resolve, reject){
    // Do Async Task
    // DB Calls, cryptography, network, etc
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

// resolve is connected to ".then" but needs to be called in the "Promise" to execute
promiseOne.then(function() {
    console.log("Promise consumed");
    
})


// a new way to use this too
// Promise doesnt need to be holded in an object
new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2');
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
    
})


// learning the connection between resolve and then
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function () {
        // let error = true
        let error = false
        if(!error){
            resolve({username: "Chai", password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


// const username = promiseFour.then( (user) => {
//     console.log(user);
//     return user.username
// })
// this wont work

// in this case we can you chaining
promiseFour.then( (user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);    
}).finally(() => {
    console.log("The promise is either resolved or rejected");  
})




const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function () {
        let error = true
        // let error = false
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})



// async function consumePromiseFive() {
//     const responce = await promiseFive
//     console.log(responce);
// }
// consumePromiseFive()
// async await cannot handle errors directtly

async function consumePromiseFive() {
    try {
        const responce = await promiseFive
        console.log(responce);
    } catch (error) {
        console.log(error);
           
    }
}
consumePromiseFive()



async function getallUsers(){
    try {
        //  fetching takes time therefore we have to use await
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await responce.json()
        // even conversion in json takes time therefore await has to be used
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getallUsers()

// another way to write
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))