const coding = ["js", "ruby", "java", "python", "cpp"]

// callback function

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);    
// } )

function printme(item){
    console.log(item);    
}

// coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

const mycoding = [
    {
        language_name: "Javascript",
        language_symbol: "JS"
    },

    {
        language_name: "Java",
        language_symbol: "JAVA"
    },

    {
        language_name: "Python",
        language_symbol: "py"
    }
]


mycoding.forEach( (item) => {
    console.log(item.language_name + ": " + item.language_symbol);
    
}) 