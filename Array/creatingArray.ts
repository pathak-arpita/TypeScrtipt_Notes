//~ In TypeScript we can create Array ---------------->

// 1). Using Square Brackets ------->

const arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('We can declare array by using Square brackets : ' + arr1);
console.log('We can declare array by using Square brackets and length is : ' + arr1.length);


// 2). Using the Array Constructor ------->
let arr2: number[] = new Array(1, 2, 3, 4, 5);
arr2[0] = 0;
console.log(arr2);
console.log('We can declare array by using Array Constructor : ' + arr2);
console.log('We can declare array by using Array Constructor and length is : ' + arr2.length);


// 3). Using " Array.of " method ------->

let arr3: number[] = Array.of(1, 2, 3, 4, 5, 6);
arr3[10] = 0;
console.log(arr3);
console.log('We can declare array by using Array.of Method : ' + arr3);
console.log('We can declare array by using Array.of Method and length is : ' + arr3.length);

// ------------------------------------------------------------------------------------------------- //

//! que.1) : Given an array of strings, create a new array that contains only the strings with a length greater than 4.
const names: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];

const ans = names.filter((item) => {
   return item.length > 4;
})

console.log("strings with a length greater than 4", ans);

// ------------------------------------------------------------------------------------------------- //

//! 2: Given an array of strings, filter out the names that start with the letter "A".
const answer = names.filter((items) => {
   return items.startsWith('A');
})

console.log("names that start with the letter- A : ", answer)