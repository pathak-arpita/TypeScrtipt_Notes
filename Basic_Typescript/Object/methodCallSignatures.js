var student_1 = {
    name: "John",
    age: 20,
    greet: function (country) {
        return "Hello, my name is ".concat(student_1.name, " and I am from ").concat(country, ".");
    }
};
var student_2 = {
    name: "jane",
    age: 22,
    greet: function (country) {
        return "Hello, my age is ".concat(student_2.age, " and I am from ").concat(country, ".");
    }
};
console.log(student_1.greet("USA"));
console.log(student_2.greet("Canada"));
