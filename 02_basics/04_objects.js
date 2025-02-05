// const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object 
//exact same values

tinderUser.id = "123456"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: "aditya@google.com",
    fullname: {
        firstname: "Aditya",
        lastname: "Verma"
    }
}

console.log(regularUser, "\n");
console.log(regularUser.fullname , "\n");
console.log(regularUser["fullname"]["firstname"]); //regularUser.fullname.firstname also works


const obj1 = {
    1: "a", 2: "b"
}

const obj2 = {
    3: "a", 4: "b"
}

//joining

// 1) // const obj3 = {
      //     obj1, obj2
      // }
// nested object type of output


// 2) const obj3 = Object.assign({}, obj1, obj2)

// {} std practice is to add empty object during combining multiple objects
// syntax is Object.assign(target, source) 
// its better to keep {} empty object as target



// 3)
const obj3 = {...obj1, ...obj2}//spreaded and joined
// console.log(obj3);



const user = [
    {
        email: "aditya@google.com",
        password: "Hello ji"
    },
    {},{},{}
]

// console.log(user[0].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//can check for property

//************Object De-Structure**********
const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh Sir"
}

//course.courseInstructor 
//way to big to type everytime

//const {courseInstructor} = course

//console.log(courseInstructor);
const {courseInstructor: instructor} = course;
//                any name can be used here

console.log(instructor);


//**************How JSON file looks like */
// {
//     "name": "Aditya",
//     "course": "JavaScript",
//     "price": "free"
// }

//array format of api 
// [
//     {},
//     {},
//     {}
// ]    

