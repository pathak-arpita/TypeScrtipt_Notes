type PersonalInfo = {
    name: string;
    age: number;
    gender?: string; // optional property
    greet: (country: string) => string; // method signature
}

const student_1: PersonalInfo = {
    name: "John",
    age: 20,
    greet: (country: string) => {
        return `Hello, my name is ${student_1.name} and I am from ${country}.`;
    }
}

const student_2: PersonalInfo = {
    name: "jane",
    age: 22,
    greet: (country: string) => {
        return `Hello, my age is ${student_2.age} and I am from ${country}.`;
    }
}

console.log(student_1.greet("USA"));
console.log(student_2.greet("Canada"));