//!  The FUNCTION CALL SIGNATURE -----------> refers to the declaration or definition of a function, 
//! which includes the function's name, parameters, and return type. 
//! It defines the structure and type information of a function without including 
//! the function's implementation or body.
var student1 = {
    name: "Arpita",
    age: 27,
    greet: function (country) { return "My name is ".concat(student1.name, " and I am ").concat(student1.age, ". I lived in ").concat(country); }
};
var introduction = function (student1) {
    console.log("Hello ".concat(student1.name, ", you are ").concat(student1.age, " years old."));
};
introduction(student1);
console.log(student1.greet("India"));
