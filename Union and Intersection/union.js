//! UNION ------------> It describes a value that can be one OR several types.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//@ts-ignore
var x;
// @ts-expect-error
x = "Hello";
x = 10;
console.log(x); // OUTPUT -----------> Here value of x is 10;
//! Que ). we want to create a function that formats the value passed to it in a
//!  specific way based on its type:
// If the input is a number, it should add a dollar sign and format it with two decimal places.
// If the input is a boolean, it should return "Yes" for true and "No" for false.
// If the input is a string, it should capitalize the first letter.
var userInput = function (value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return '$' + value.toFixed(2);
    }
    else if (typeof value === 'boolean' && value == true) {
        return 'Yes';
    }
    else if (typeof value === 'boolean' && value == false) {
        return 'No';
    }
};
console.log(userInput(10));
console.log(userInput(true));
console.log(userInput("Arpita"));
console.log(userInput(false));
var user = { name: "Arpita", age: 26 };
var myInfo = { email: "xyz@gmail.com", phone_number: 123456789 };
var MyDetails = function (user, myInfo) {
    return __assign(__assign({}, user), myInfo);
};
console.log(MyDetails(user, myInfo));
//! NOTE -----------> In Union we get advantage that we can write property of 
//!                   either User or MyLocation.
//                    But we have to mention each and every property of that object 
//? If we try to write like this ------> 
// const employee : EmployeeDetails ={
//     name:'John',
//   }    //! OUTPUT -----------------> Here we get an Error.
