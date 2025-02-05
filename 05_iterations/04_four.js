// iterating objects
// use "for in" rather than "for of"
const myObj = {
    js: "Javascripts",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

// for (const key in myObj) {
//     console.log(myObj[key]);
// }

for (const key in myObj) {
    console.log(`${key} stands for ${myObj[key]}`);
}


//does for in work for arrays too?
//yes
const programs = ["js", ""]