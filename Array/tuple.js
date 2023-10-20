//! Tuple -----------> It is same as an Array 
// ? NOTE -------------------> TUPLES ARE IMMUTABLE.
//! Difference between Array and  Tuples ?
//?  ARRAY ------------> 1. It stores SINGLE data type.
//?                      2. And we can ADD or REMOVE elements from an array.
//?  TUPLES ------------> 1. It stores ONE OR MORE THAN ONE data types.
//?                       2. Tuples are IMMUTABLE.
// Example 1). 
var myTuple = ['Arpita', 42222, true];
var firstEle = myTuple[0];
console.log("first element of tuple : ", firstEle);
var per1 = ["Arpita", "female", 35];
var person2 = ["Arpit", "male", 10];
console.log("My name is ".concat(per1[0], " . I am ").concat(per1[2], " yrs old & my gender is ").concat(per1[1]));
console.log("My name is ".concat(person2[0], " . I am ").concat(person2[2], " yrs old & my gender is ").concat(person2[1]));
