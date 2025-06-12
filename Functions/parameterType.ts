/*
&    There are two types of Parameters --------------->
&        1.  Default Parameter
&        2.  Optional Parameter
*/

// --------------------------------------------------------------------------------------- //

//~ General syntax for Parameter ------->

function myFunc(name: string, id: number): string {
    return `My name is ${name} & my id is ${id}`;
}

console.log(myFunc("John", 123))

// --------------------------------------------------------------------------------------- //

//~ Default Parameter -------> are specified by providing a default value in the parameter declaration.

function myFuncForDefaultParam(name: string, id: number = 1) {
    return `My name is ${name} & my id is ${id}`;
}

console.log(myFuncForDefaultParam("Arpita"))

// --------------------------------------------------------------------------------------- //

//~ Optional Parameter -------> are denoted by appending a ? symbol after the parameter name.

// function myFuncForOptionalParam(name: string , id ?:number){
//     return `My name is ${name} & my id is ${id}`;
// }

// console.log(myFuncForOptionalParam("Aditee" )) 

//OUTPUT ---------> My name is Aditee & my id is undefined

function myFuncForOptionalParam(name: string, id?: number) {
    return `My name is ${name} .`;
}

console.log(myFuncForOptionalParam("Aditee"))
//OUTPUT ---------> My name is Aditee .

// --------------------------------------------------------------------------------------- //

// Combination of Optional and Default Parameter Code ------------->

const myEmploy = (name: String, id?: number): String => {
    if (id) {
        return `My name is ${name}  and my employee id is ${id}.`;
    }
    else {
        return `My name is ${name} .`;
    }
}

const emp1 = myEmploy("Rahul", 129764);
const emp2 = myEmploy("Saurabh");

console.log(emp1);   //OUTPUT ---------> My name is Rahul and my employee id is 129764 .
console.log(emp2);   //OUTPUT ---------> My name is Saurabh .