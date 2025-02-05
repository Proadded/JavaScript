//Immediately Invoked Function Expressions (IIFE)
//Used to avoid pollution from global scope declarations
//also to immediately execulte a function


//normal way
// function chai() {
//     console.log(`DB Connected`);
// }
// chai()

//the IIFE way
(function chai() {
    //named iife
    console.log(`DB Connected`);
})();
//still executable
//but you have to add semicolon to stop the execution otherwise it will keep on running and create problem for the next code


//unnamed iife
const chaitwo = ( () => {console.log(`DB Connected Two`)})();
const chaithree = ( (name) => {console.log(`DB Connected Three, ${name}`)})('Aditya');
