//!Intersection ---------------> Allow you to combine multiple types into a single type. 
//!                              You use the & (ampersand) symbol to define an intersection type.
var myInformation = {
    email: "John",
    age: 30,
    username: 'john123',
    department: 'HR'
};
var userInfo = {
    email: 'Alex',
    age: 45
};
//! NOTE -----------> In Intersection, we have write property of 
//!                    Both SelfInfo and Employee
//                    But we have to mention all the properties of both the objects. 
//? If we try to write like this ------> 
// const myInfo : MyEmployeeDetails ={
//     name:'John',
//     age: 30,
//     username: 'john123',
//   }    //! OUTPUT -----------------> Here we get an Error.
// type User1 = {
//     name: string;
//     age: number;
// }
// type MyLocation1 = {
//     city: string;
//     country: string;
// }
// const user11: User1 = { name: "Arpita", age: 20 };
// const myLocation1: MyLocation1 = { city: 'Pune', country: 'India' };
// const myInfo1 = (user11: User1, myLocation1: MyLocation1): User1 & MyLocation1 => {
//     return { ...user11, ...myLocation1 };
// }
// const myDetails1: User1 & MyLocation1 = myInfo1(user11, myLocation1);
// console.log(myDetails1);
