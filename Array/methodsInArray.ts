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

//~ For loops -------------->


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