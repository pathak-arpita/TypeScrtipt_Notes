// ? Array -------------------> Its is nothing but collection of data type.

//! NOTE -------------> data type may or may not be similar in Type Script.

const arr = [1,2,3,4];
arr.push(5);
// arr.push("Arpita");
console.log("Length of an Array -----> " , arr.length);
console.log("Array -----> " , arr);


// !NOTE -------------> In above Code it shows warning but output of above code is :
//                    OUTPUT ------------->
//                       Length of an Array ----->  6
//                       Array ----->  (6) [1, 2, 3, 4, 5, 'Arpita']


const arr2 : number[] = [1,2,3,4,5];
// arr2.push("Aditee");
console.log("Array -----> " , arr2);

// OUTPUT ------------->  
// Array ----->  (6) [1, 2, 3, 4, 5, 'Aditee']
