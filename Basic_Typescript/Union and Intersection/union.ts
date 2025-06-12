//! UNION ------------> It describes a value that can be one OR several types.

//@ts-ignore
let x : string | number;

// @ts-expect-error
x = "Hello";
x = 10;
console.log(x);     // OUTPUT -----------> Here value of x is 10;


//! Que ). we want to create a function that formats the value passed to it in a
//!  specific way based on its type:
// If the input is a number, it should add a dollar sign and format it with two decimal places.
// If the input is a boolean, it should return "Yes" for true and "No" for false.
// If the input is a string, it should capitalize the first letter.

const userInput = (value : string | number | boolean) =>{
    if(typeof value === 'string') {
        return value.toUpperCase();
    }
    else if(typeof value === 'number') {
        return '$'+value.toFixed(2);
    }
    else if(typeof value === 'boolean' && value == true) {
        return 'Yes';
    }
    else if(typeof value === 'boolean' && value == false) {
        return 'No';
    }
}


console.log(userInput(10));
console.log(userInput(true));
console.log(userInput("Arpita"));
console.log(userInput(false));


// Example related to an OBJECT ----------->

type User = {
    name : string;
    age : number;
}

type MyInfo = {
    email : string;
    phone_number : number;
}

const user : User = {name:"Arpita", age: 26};
const myInfo : MyInfo = {email : "xyz@gmail.com" , phone_number:123456789};

const MyDetails = (user: User , myInfo : MyInfo): User | MyInfo =>{
    return{...user , ...myInfo};
}

console.log(MyDetails(user , myInfo));

//! NOTE -----------> In Union we get advantage that we can write property of 
//!                   either User or MyLocation.
//                    But we have to mention each and every property of that object 

//? If we try to write like this ------> 
// const employee : User ={
//     name:'John',
//   }    //! OUTPUT -----------------> Here we get an Error.