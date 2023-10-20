//!Intersection ---------------> Allow you to combine multiple types into a single type. 
//!                              You use the & (ampersand) symbol to define an intersection type.


type SelfInfo = {
    email: string;
    age: number;
}

type Employee = {
    username: string;
    department: string;
}

type MyEmployeeDetails = SelfInfo & Employee;

const myInformation: MyEmployeeDetails = {
    email: "John",
    age: 30,
    username: 'john123',
    department: 'HR'
};

const userInfo : SelfInfo ={
    email: 'Alex',
    age: 45 
}



//! NOTE -----------> In Intersection, we have write property of 
//!                    Both SelfInfo and Employee
//                    But we have to mention all the properties of both the objects. 

//? If we try to write like this ------> 
// const myInfo : MyEmployeeDetails ={
//     name:'John',
//     age: 30,
//     username: 'john123',
//   }    //! OUTPUT -----------------> Here we get an Error.