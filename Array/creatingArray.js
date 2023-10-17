// ! In TypeScript we can create Array ---------------->
// 1). Using Square Brackets ------->
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('We can declare array by using Square brackets : ' + arr1);
console.log('We can declare array by using Square brackets and length is : ' + arr1.length);
// 2). Using the Array Constructor ------->
// @ts-ignore
var arr2 = new Array(1, 2, 3, 4, 5);
arr2[0] = 0;
console.log(arr2);
console.log('We can declare array by using Array Constructor : ' + arr2);
console.log('We can declare array by using Array Constructor and length is : ' + arr2.length);
// 3). Using " Array.of " method ------->
var arr3 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
arr3[0] = 0;
console.log(arr3);
console.log('We can declare array by using Array.of Method : ' + arr3);
console.log('We can declare array by using Array.of Method and length is : ' + arr3.length);
// ------------------------------------------------------------------------------------------------- //
//! que.1) : Given an array of strings, create a new array that contains only the strings with a length greater than 4.
var names = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
var ans = names.filter(function (item) {
    return item.length > 4;
});
console.log("strings with a length greater than 4", ans);
//! 2: Given an array of strings, filter out the names that start with the letter "A".
var answer = names.filter(function (items) {
    return items.startsWith('A');
});
console.log("names that start with the letter- A : ", answer);
