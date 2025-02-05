const marvel_heros = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);

// const newHeros = [...marvel_heros, ...dc]//same kaam as concat

// console.log(newHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_another_array = anotherArray.flat(Infinity)
console.log(usable_another_array);


// console.log(Array.isArray("Aditya"))
// console.log(Array.from("Aditya"));
// console.log(Array.from({name: "Aditya"})); //mention nai kiya h ki array banana kispe h: values pe ye keys pe

let score1 = 100
let score2 = 200
let score3 = 300
 
console.log(Array.of(score1, score2, score3));
