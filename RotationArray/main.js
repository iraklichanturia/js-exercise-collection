// Rotate Array: Write a program that rotates the elements of an array to the right by a specified number of positions.
// Use splice() to achieve the rotation.

// let create array and push random numbers
let arr = [];
for (let i = 0; i < 15; i++) {
  arr.push(Math.floor(Math.random() * 26));
}
console.log("Original Array: ", arr);
//Write a program that rotates the elements of an array to the right by a specified number of positions
function rotateArrayRight(array, numOfRotations) {
  for (let j = 0; j < numOfRotations; j++) {
    let lastElement = array[array.length - 1];
    array.splice(-1, 1);
    array.unshift(lastElement);
  }
}
rotateArrayRight(arr, 5);
console.log("After Rotation:", arr);