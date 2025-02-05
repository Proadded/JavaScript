//basic syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Default case match");
        
//         break;
// }

//agar har case me break nai lagaya to uske neeche ka sare case execute ho jayega witout checking (except default)    

const month = "jan"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log("Default case match");
        
        break;
}