//! Tuple -----------> It is same as an Array 
// ? NOTE -------------------> TUPLES ARE IMMUTABLE.

//! Difference between Array and  Tuples ?
//?  ARRAY ------------> 1. It stores SINGLE data type.
//?                      2. And we can ADD or REMOVE elements from an array.

//?  TUPLES ------------> 1. It stores ONE OR MORE THAN ONE data types.
//?                       2. Tuples are IMMUTABLE.

// Example 1). 

let myTuple : [string , number , boolean] = ['Arpita', 42222,true];
let firstEle = myTuple[0];
console.log("first element of tuple : " , firstEle);

// Example 2). 

type personalInfo = [string , string, number];
let per1 : personalInfo= ["Arpita", "female" ,35 ];
let person2 : personalInfo= ["Arpit", "male" ,10 ];
console.log(`My name is ${per1[0]} . I am ${per1[2]} yrs old & my gender is ${per1[1]}`)
console.log(`My name is ${person2[0]} . I am ${person2[2]} yrs old & my gender is ${person2[1]}`)