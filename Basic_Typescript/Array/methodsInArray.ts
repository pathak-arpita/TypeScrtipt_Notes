// Example 1).

const array_1: string[] = ["apple", "banana", "cherry", "orange"];
const newUpdatedArray_1 = array_1.push("kiwi");

console.log("Updated array after push operation:", newUpdatedArray_1);
console.log("Array after push operation:", array_1);


//& NOTE ------------->   The "PUSH" method returns the new length of the array after the element has been added, 
//&                       not the updated array itself.


const removeLastItem = array_1.pop();
console.log("Removed last item:", removeLastItem);
console.log("Array after pop operation:", array_1);

//& NOTE ------------->   The "POP" method returns the removed element, not the updated array itself.

// --------------------------------------------------------------------------------------- //

//~ FOR LOOPS -------------->


//^  1. Normal for loop :
for (let i = 0; i < array_1.length; i++) {
    console.log("Element at index", i, "is:", array_1[i]);
}

//^  2. For...of loop :
for (const items of array_1) {
    console.log("Element using for...of loop:", items);
}

//^  3. For...in loop :
for (const index in array_1) {
    console.log("Element using for...in loop at index", index, "is:", array_1[index]);
}

//^  4. forEach loop :
array_1.forEach((item, index) => {
    console.log("Element using forEach loop at index", index, "is:", item);
}
);

// --------------------------------------------------------------------------------------- //

//~ MAP METHOD ---------------> map method will return a new array and it does not modify the original array.

const map_arr: number[] = [1, 2, 3, 4, 5];

const map_Array: number[] = array_1.map(((index, item) => {
    return item * item;
}))

console.log("Mapped array:", map_Array);
console.log("Original array after map operation:", map_arr);

// --------------------------------------------------------------------------------------- //

//~ FILTER METHOD ---------------> filter method will return a new array and it does not modify the original array.
const filter_arr: number[] = [1, 2, 3, 4, 5];

const map_Array_2 = filter_arr.map((item, index) => {
    return item > 2;
});
console.log("Mapped array with filter condition:", map_Array_2);

const filter_Array: number[] = filter_arr.filter((item, index) => {
    return item > 2;
}
);
console.log("Filtered array:", filter_Array);
console.log("Original array after filter operation:", filter_arr);

//&  NOTE ------------->   Limitation of MAP method is it wont filter the elements, it will just map the elements to a new array based on the condition provided.