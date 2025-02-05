let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// output in miliseconds from 1970
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
//output for seconds

let newDate = new Date()
// console.log(newDate.getMonth() + 1);//shuru 0 se hote h esliye
// console.log(newDate.getDay());

// console.log(`${newDate.getDate()} and the time is ${newDate.getTime()} `);


//ctrl + space to get all possible methods for a syntax
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));
