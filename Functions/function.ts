/*
&    functions are reusable blocks of code that perform a specific task.
&    we can writ functions in two ways ------------->
&             1). Normal Function 
&             2). Arrow Function

^    Syntax of Function ------------------------->

       function func(param1: type, param2: type): returnType {
              function body
       }
     
       func(arg1, arg2);
       
^       OR

       const func = function (param1: type, param2: type): returnType {
              function body
       }
       func(arg1, arg2);
*/

// -------------------------------------------------------------------------------------------------- //

//~ Normal Function ------------------------->

// 1). 
function sum(a: number, b: number): number {
    return a + b;
}

console.log("The SUM is -----------> " + sum(5, 7));

// 2).
function func_1(num: number): number {
    if (num == 0) {
        return -1;
    }

    for (let i = 0; i < num; i++) {
        console.log(i + ",");
    }
    return 0;
}

console.log("ans of func_1", func_1(5));


//~ Arrow Function ------------------------->

const multiply = (x: number, y: number): number => {
    return x * y;
}

console.log("The PRODUCT is -----------> " + multiply(5, 7));

// -------------------------------------------------------------------------------------------------- //


//! Que.) write a function which return boolean if passing parameter is divisible by 4 and 8.


function divisibleBy4and8(num: number): boolean {
    return (num % 4 === 0 && num % 8 === 0);
}

console.log("NUMBER is divisible by 4 and 8  -----------> " + divisibleBy4and8(8));

//By using IIFE ----->
const func = (function divisibleBy4and8(x: number): boolean {
    return x % 4 === 0 && x % 8 === 0;
})(10)

console.log("ans of func", func);


// ! Que.) Fetch the Data --------------------------->
async function fetchData(): Promise<unknown> {
    const response = await fetch("https://api.quotable.io/random");
    const quote = await response.json();
    // console.log(quote);
    return quote;
}

async function processData() {
    let data = await fetchData();
    if (typeof data === 'object') {
        console.log("data-------------->", data);
    }
    else {
        throw new Error("Not an Object");
    }
}

processData();



//! Que.) Check Palindrome -------------------------->

function isPaliendrome(str: string): boolean {
    let split = str.split("");
    let reverse = split.reverse();
    let joint = reverse.join("");

    return str === joint;
}


console.log("Given String is Paliendrome -----------------> ", isPaliendrome("123321"));


//! Que.) Average of Array ------------->

const array: number[] = [1, 2, 3, 4, 5];

const average = array.reduce((curr, acc) => {
    return curr + acc;
})

console.log("Average of an Array is -------> ", average / array.length);