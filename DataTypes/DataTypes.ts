/*
    There are 6 basic data types in TypeScript:

         1. Number
         2. String
         3. Boolean
         4. Any
         5. Unknown
         6. BigInt

    These data types are used to define the type of data that can be stored in a variable.

&   NOTE ---------------->
&     1. TypeScript is a superset of JavaScript, which means that all JavaScript code is also valid TypeScript code.
&     2. TypeScript adds static typing to JavaScript, allowing developers to catch type-related errors at compile time rather than runtime.
 */

// --------------------------------------------------------------------------------------------//

//~ 1. NUMBER -------------------------->

// 1).
var dataTypeX: number = 5;
console.log("value of dataTypeX", dataTypeX);

// 2).
// @ts-ignore
console.log("value of y", y);
var y: number = 10;

//& NOTE ----------------> FOR WRITING CLOSER IN TYPESCRIPT YOU HAVE TO WRITE "// @ts-ignore" ;


// 3).
var z: number = NaN;
console.log("value of z", z);
console.log("type of z", typeof z);

// --------------------------------------------------------------------------------------------//

//~ 2. STRING -------------------------->

var str: string = "arpita";
console.log("value of str", str);

// --------------------------------------------------------------------------------------------//

//~ 3. BOOLEAN -------------------------->

var value: boolean = false;
console.log("value of value", value);

// var ans: boolean = y % 2 === 0 ? true : false;
// var ans: boolean = NaN % 2 === 0 ? true : false;
var dataTypeAns: boolean = isNaN(NaN % 2);
console.log("value of dataTypeAns", dataTypeAns, "NaN % 2", NaN % 2);

// --------------------------------------------------------------------------------------------//

//~ 4. ANY -------------------------->

let any_Var: any = "arpita";
any_Var = 5;
any_Var = true;

console.log("value of any_Var", any_Var);

//& NOTE ----------------> ANY ALLOWS TO PUT ANY VALUE OF THAT VARIABLE;

// --------------------------------------------------------------------------------------------//

//~ 4. UNKNOWN -------------------------->

let unknown_Var: unknown = "arpita";
unknown_Var = true;
unknown_Var = 55;

console.log("value of unknown_Var", unknown_Var);

/*
& NOTE ---------------->
& 1 . The unknown type is a safer alternative to any because it still enforces type checking and type safety. 
& 2. Variables of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in specific ways. 
*/

// For Example ---->

if (typeof unknown_Var === "boolean") {
    console.log("unknown_Var is of boolean type and its value is - ", unknown_Var);
}
else if (typeof unknown_Var === "string") {
    console.log("unknown_Var is of string type and its value is - ", unknown_Var);
}
else if (typeof unknown_Var === "number") {
    console.log("unknown_Var is of number type and its value is - ", unknown_Var);
}

// --------------------------------------------------------------------------------------------//

//~ 4. BigInt -------------------------->

var bigInt_Var: bigint = 1234567890123456789012345678901234567890n; 
console.log("value of bigInt_Var", bigInt_Var);

var bigInt_Var2: bigint = 1234567890123456789012345678901234567890n;   
console.log("value of bigInt_Var2", bigInt_Var2);

const addition_BigInt: bigint = bigInt_Var + bigInt_Var2;
console.log("value of addition_BigInt", addition_BigInt);

// & NOTE ----------------> the 'n' at the end to indicate a BigInt literal.
