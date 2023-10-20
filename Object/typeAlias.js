//! type Alias --------> is represented by " type " key word.
var person = {
    height: 1.44,
    weight: 50,
    age: 23,
};
var person1 = {
    height: 1.89,
    weight: 76,
    age: 28
};
// const calculateBMI = (person:Person)=>{
//     return `The BMI of Person is ${(person.weight / (person.height *person.height)).toFixed(2)}`
// }
function calculateBMI(person) {
    return "The BMI of Person is ".concat((person.weight / (person.height * person.height)).toFixed(2));
}
console.log(calculateBMI(person));
console.log(calculateBMI(person1));
