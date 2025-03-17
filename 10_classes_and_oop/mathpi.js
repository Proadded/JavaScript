// const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(discriptor);
// output
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// cannot overwrite the value of math.pi

const chai = {
    name: "adarak wali chai",
    price: 250,
    isAvailable: "true",

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai))
// undefined
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: true,
    
// })

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true,
    // only "name" property has got its property changed not the rest like "price", "isAvailable" 
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}
// will also show the function too

// to avoid the fuction part
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}