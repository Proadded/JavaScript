//while and do while

// let index = 2
// while (index  <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }

const myArray = ["flash", "Batman", "superman"]

let arr = 0
while (arr  < myArray.length) {
    console.log(`Hero name: ${myArray[arr]}`);
    arr = arr + 1
} 

let score = 11

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);