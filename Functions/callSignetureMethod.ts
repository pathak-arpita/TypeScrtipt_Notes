//!  The FUNCTION CALL SIGNATURE -----------> refers to the declaration or definition of a function, 
//! which includes the function's name, parameters, and return type. 
//! It defines the structure and type information of a function without including 
//! the function's implementation or body.


type Student = {
    name : string;
    age : number;
    gender ?: string;
    greet : (country:string) => string;
}

const student1: Student = {
    name : "Arpita",
    age : 27,
    greet : (country):string => `My name is ${student1.name} and I am ${student1.age}. I lived in ${country}`
}

const introduction = (student1 : Student) =>{
    console.log(`Hello ${student1.name}, you are ${student1.age} years old.`);
}

introduction(student1);
console.log(student1.greet("India"));