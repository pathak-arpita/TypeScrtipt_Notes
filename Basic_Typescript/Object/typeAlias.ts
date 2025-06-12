//! type Alias --------> is represented by " type " key word.

type Person = {
    height : number;
    weight :  number;
    age : number;
}

const person : Person = {
    height : 1.44,
    weight : 50,
    age : 23,
}

const person1 : Person = {
    height : 1.89,
    weight : 76,
    age : 28
}
// const calculateBMI = (person:Person)=>{
//     return `The BMI of Person is ${(person.weight / (person.height *person.height)).toFixed(2)}`
// }

function calculateBMI (person:Person) {
    return `The BMI of Person is ${(person.weight / (person.height *person.height)).toFixed(2)}`
}

console.log(calculateBMI(person));
console.log(calculateBMI(person1));